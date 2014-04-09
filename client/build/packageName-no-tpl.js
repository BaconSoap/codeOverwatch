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
                pageDataService.currentPageData.pageTitle = 'Overiview';
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
    var app = angular.module('overwatch', ['ui.router', 'templates-main', 'overwatch.overview', 'overwatch.layout']);
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

    app.run([
        '$state', function ($state) {
            angular.noop($state);
        }]);

    app.factory('viewModel', [function () {
            var a = { pageTitle: '' };
            return a;
        }]);
})(overwatch || (overwatch = {}));
