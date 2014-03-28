var codeOverwatch;
(function (codeOverwatch) {
    var app = angular.module('codeOverwatch.overview', []);
    app.config([
        '$stateProvider', function ($stateProvider) {
            $stateProvider.state('overview', {
                url: '/',
                templateUrl: 'templates/overview.tpl.html'
            });
        }]);
})(codeOverwatch || (codeOverwatch = {}));
var myApp;
(function (myApp) {
    var app = angular.module('codeOverwatch', ['ui.router', 'templates-main', 'codeOverwatch.overview']);
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
    myApp.a = 'apple';
})(myApp || (myApp = {}));
