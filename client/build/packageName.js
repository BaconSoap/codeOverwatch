var overwatch;
(function (overwatch) {
    (function (overview) {
        var app = angular.module('overwatch.overview', ['ui.router']);

        app.config([
            '$stateProvider', function ($stateProvider) {
                $stateProvider.state('overview', {
                    url: '/URL',
                    templateUrl: 'templates/overview/overviewCtrl.tpl.html'
                });
            }]);

        app.controller('overviewCtrl', [
            '$scope', function ($scope) {
                $scope.viewModel = {};
            }]);
    })(overwatch.overview || (overwatch.overview = {}));
    var overview = overwatch.overview;
})(overwatch || (overwatch = {}));
var overwatch;
(function (overwatch) {
    var app = angular.module('overwatch', ['ui.router', 'templates-main', 'overwatch.overview']);
    app.constant('versionNumber', '0.0.0');
    app.config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
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
;angular.module('templates-main', ['templates/index.tpl.html', 'templates/overview.tpl.html', 'templates/overview/overviewCtrl.tpl.html', 'templates/state1.tpl.html', 'templates/state2.tpl.html']);

angular.module("templates/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/index.tpl.html",
    "<h2 class=\"sub-header\">Section title</h2>\n" +
    "<div ui-view></div>");
}]);

angular.module("templates/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/overview.tpl.html",
    "overview!");
}]);

angular.module("templates/overview/overviewCtrl.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/overview/overviewCtrl.tpl.html",
    "<div data-ng-controller=\"overviewCtrl\">\n" +
    "\n" +
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
