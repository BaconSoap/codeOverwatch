var overwatch;
(function (overwatch) {
    var app = angular.module('overwatch.conf', []);
})(overwatch || (overwatch = {}));
var overwatch;
(function (overwatch) {
    (function (overview) {
        var app = angular.module('overwatch.overview', ['ui.router', 'overwatch.layout.pageDataService']);

        app.config([
            '$stateProvider', function ($stateProvider) {
                console.log('config overview');
                $stateProvider.state('overview', {
                    url: '/overview',
                    templateUrl: 'templates/overview/overviewCtrl.tpl.html'
                });
            }]);

        app.controller('overviewCtrl', [
            '$scope', 'pageDataService',
            function ($scope, pageDataService) {
                $scope.viewModel = {};
                pageDataService.currentPageData.pageTitle = 'Overview';
            }]);
    })(overwatch.overview || (overwatch.overview = {}));
    var overview = overwatch.overview;
})(overwatch || (overwatch = {}));
var overwatch;
(function (overwatch) {
    (function (layout) {
        var app = angular.module('overwatch.layout', ['ui.router', 'overwatch.layout.pageDataService']);

        app.controller('pageLayoutCtrl', [
            '$scope', 'pageDataService',
            function ($scope, pageDataService) {
                $scope.viewModel = {};
                $scope.viewModel.pageData = pageDataService.currentPageData;
            }]);
    })(overwatch.layout || (overwatch.layout = {}));
    var layout = overwatch.layout;
})(overwatch || (overwatch = {}));
var overwatch;
(function (overwatch) {
    (function (layout) {
        var app = angular.module('overwatch.layout.pageDataService', []);

        app.factory('pageDataService', [function () {
                var service = {
                    currentPageData: {
                        pageTitle: ''
                    }
                };

                return service;
            }]);
    })(overwatch.layout || (overwatch.layout = {}));
    var layout = overwatch.layout;
})(overwatch || (overwatch = {}));
var overwatch;
(function (overwatch) {
    (function (git) {
        var app = angular.module('overwatch.git.branchesService', []);

        app.factory('branchesService', [
            '$http', function ($http) {
                function getBranches() {
                    return $http.get('/api/branches', { cache: true }).then(function (branches) {
                        return branches.data;
                    }).then(function (branches) {
                        for (var i = 0; i < branches.length; i++) {
                            branches[i].urlName = branches[i].name.replace('/', '%2F');
                        }
                        return branches;
                    });
                }

                function getBranchInfo(branchName) {
                    return $http.get('/api/branch/' + branchName, { cache: true }).then(function (branch) {
                        return branch.data;
                    }).then(function (branch) {
                        branch.urlName = branch.name.replace('/', '%2F');
                        return branch;
                    });
                }

                function getCommits(branchName, userName) {
                    return $http.get('/api/branch/' + branchName + '/commits?author=' + userName, { cache: true }).then(function (commits) {
                        return commits.data;
                    });
                }

                var service = {
                    getBranches: getBranches,
                    getBranchInfo: getBranchInfo,
                    getCommits: getCommits
                };
                return service;
            }]);
    })(overwatch.git || (overwatch.git = {}));
    var git = overwatch.git;
})(overwatch || (overwatch = {}));
var overwatch;
(function (overwatch) {
    (function (git) {
        var app = angular.module('overwatch.git.branches', ['ui.router', 'overwatch.git.branchesService']);

        app.config([
            '$stateProvider', function ($stateProvider) {
                $stateProvider.state('branches', {
                    url: '/branches',
                    templateUrl: 'templates/git/branchesCtrl.tpl.html',
                    resolve: {
                        branches: ['branchesService', function (branchesService) {
                                return branchesService.getBranches();
                            }]
                    },
                    controller: 'branchesCtrl'
                });
            }]);

        app.controller('branchesCtrl', [
            '$scope', 'branches',
            function ($scope, branches) {
                $scope.viewModel = {};
                $scope.viewModel.branches = branches;
            }]);
    })(overwatch.git || (overwatch.git = {}));
    var git = overwatch.git;
})(overwatch || (overwatch = {}));
var overwatch;
(function (overwatch) {
    (function (git) {
        var app = angular.module('overwatch.git.branch', ['ui.router', 'overwatch.git.branchesService', 'overwatch.layout.pageDataService']);

        app.config([
            '$stateProvider',
            function ($stateProvider) {
                $stateProvider.state('branch', {
                    url: '/branch/:branchName',
                    templateUrl: 'templates/git/branchCtrl.tpl.html',
                    resolve: {
                        branchInfo: [
                            '$stateParams', 'branchesService', function ($stateParams, branchesService) {
                                return branchesService.getBranchInfo($stateParams.branchName);
                            }]
                    },
                    controller: 'branchCtrl'
                });
            }]);

        app.controller('branchCtrl', [
            '$scope', '$stateParams', 'pageDataService', 'branchInfo', 'branchesService',
            function ($scope, $stateParams, pageDataService, branchInfo, branchesService) {
                $scope.viewModel = {};
                $scope.viewModel.branch = branchInfo;
                pageDataService.currentPageData.pageTitle = branchInfo.name;
                $scope.filterCommits = function () {
                    branchesService.getCommits(branchInfo.urlName, $scope.viewModel.username).then(function (commits) {
                        $scope.commits = commits;
                    });
                };
            }]);
    })(overwatch.git || (overwatch.git = {}));
    var git = overwatch.git;
})(overwatch || (overwatch = {}));
var overwatch;
(function (overwatch) {
    var app = angular.module('overwatch', [
        'ui.router', 'templates-main', 'overwatch.overview',
        'overwatch.git.branch', 'overwatch.git.branches', 'overwatch.layout']);
    app.constant('versionNumber', '0.0.0');
    app.config([
        '$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            console.log('config base');
            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/overview');
            $stateProvider.state('state1', {
                url: '/state1',
                templateUrl: 'templates/state1.tpl.html'
            }).state('state2', {
                url: '/state2',
                templateUrl: 'templates/state2.tpl.html'
            });
        }]);

    app.run(['$state', function ($state) {
            return angular.noop($state);
        }]);

    app.factory('viewModel', [function () {
            var a = { pageTitle: 'The pagetitle should be changed for this state' };
            return a;
        }]);
})(overwatch || (overwatch = {}));
