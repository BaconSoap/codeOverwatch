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
;angular.module('templates-main', ['templates/git/branchCtrl.tpl.html', 'templates/git/branchesCtrl.tpl.html', 'templates/index.tpl.html', 'templates/layout/header.tpl.html', 'templates/layout/sidebar.tpl.html', 'templates/overview.tpl.html', 'templates/overview/overviewCtrl.tpl.html', 'templates/state1.tpl.html', 'templates/state2.tpl.html']);

angular.module("templates/git/branchCtrl.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/git/branchCtrl.tpl.html",
    "<div>\n" +
    "	View <a href=\"{{viewModel.branch._links.html}}\">{{viewModel.branch.name}}</a> on Github <br/>\n" +
    "	<label for=\"forUser\">\n" +
    "		Filter by user:\n" +
    "	</label>\n" +
    "\n" +
    "	<input type=\"text\" id=\"forUser\" name=\"forUser\" ng-model=\"viewModel.username\" size=\"50\"> <button ng-click=\"filterCommits()\">Filter</button>\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"commit in commits\">{{commit.commit.message}}</li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("templates/git/branchesCtrl.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/git/branchesCtrl.tpl.html",
    "<div>\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"branch in viewModel.branches\">\n" +
    "			<a ui-sref=\"branch({branchName: branch.urlName})\">{{branch.name}}</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("templates/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/index.tpl.html",
    "<div ui-view></div>");
}]);

angular.module("templates/layout/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/layout/header.tpl.html",
    "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "	<div class=\"container-fluid\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "				<span class=\"sr-only\">Toggle navigation</span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "			</button>\n" +
    "			<a class=\"navbar-brand\" href=\"#\">Overwatch</a>\n" +
    "		</div>\n" +
    "		<div class=\"navbar-collapse collapse\">\n" +
    "			<ul class=\"nav navbar-nav navbar-right\">\n" +
    "				<li><a data-ui-sref=\"overview\" href=\"#\">Dashboard</a></li>\n" +
    "				<li><a href=\"#\">Settings</a></li>\n" +
    "				<li><a href=\"#\">Profile</a></li>\n" +
    "				<li><a href=\"#\">Help</a></li>\n" +
    "			</ul>\n" +
    "			<form class=\"navbar-form navbar-right\">\n" +
    "				<input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("templates/layout/sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/layout/sidebar.tpl.html",
    "<div class=\"col-sm-3 col-md-2 sidebar\">\n" +
    "	<ul class=\"nav nav-sidebar\">\n" +
    "		<li><a href=\"#\" ui-sref=\"overview\">Overview</a></li>\n" +
    "		<li><a href=\"#\" ui-sref=\"branches\">All Branches</a></li>\n" +
    "		<li><a href=\"#\">Export</a></li>\n" +
    "	</ul>\n" +
    "	<ul class=\"nav nav-sidebar\">\n" +
    "		<li><a href=\"\">Nav item</a></li>\n" +
    "		<li><a href=\"\">Nav item again</a></li>\n" +
    "		<li><a href=\"\">One more nav</a></li>\n" +
    "		<li><a href=\"\">Another nav item</a></li>\n" +
    "		<li><a href=\"\">More navigation</a></li>\n" +
    "	</ul>\n" +
    "	<ul class=\"nav nav-sidebar\">\n" +
    "		<li><a href=\"\">Nav item again</a></li>\n" +
    "		<li><a href=\"\">One more nav</a></li>\n" +
    "		<li><a href=\"\">Another nav item</a></li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("templates/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/overview.tpl.html",
    "overview!");
}]);

angular.module("templates/overview/overviewCtrl.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/overview/overviewCtrl.tpl.html",
    "<div data-ng-controller=\"overviewCtrl\">\n" +
    "	this is the overview right in here\n" +
    "</div>");
}]);

angular.module("templates/state1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/state1.tpl.html",
    "this is state 1");
}]);

angular.module("templates/state2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/state2.tpl.html",
    "this is state 2");
}]);
