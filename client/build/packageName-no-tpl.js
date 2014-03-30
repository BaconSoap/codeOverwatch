var overwatch;
(function (overwatch) {
    var app = angular.module('overwatch.overview', []);
    app.config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('overview', {
                url: '/',
                templateUrl: 'templates/overview.tpl.html'
            });
        }]);
})(overwatch || (overwatch = {}));
var overwatch;
(function (overwatch) {
    var app = angular.module('overwatch', ['ui.router', 'templates-main', 'overwatch.overview']);
    app.constant('versionNumber', '0.0.0');
    app.config([
        '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('state1', {
                url: '/state1',
                templateUrl: 'templates/state1.tpl.html'
            }).state('state2', {
                url: '/state2',
                templateUrl: 'templates/state2.tpl.html'
            });
        }]);

    app.factory('viewModel', [function () {
            var a = { pageTitle: '' };
            return a;
        }]);
})(overwatch || (overwatch = {}));
