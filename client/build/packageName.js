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
;angular.module('templates-main', ['templates/index.tpl.html', 'templates/overview.tpl.html', 'templates/state1.tpl.html', 'templates/state2.tpl.html']);

angular.module("templates/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/index.tpl.html",
    "<h2 class=\"sub-header\">Section title</h2>\n" +
    "<div ui-view></div>");
}]);

angular.module("templates/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/overview.tpl.html",
    "overview!");
}]);

angular.module("templates/state1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/state1.tpl.html",
    "this is state 1");
}]);

angular.module("templates/state2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/state2.tpl.html",
    "this is state 2");
}]);
