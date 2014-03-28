///<reference path="references.ts" />

module myApp {
	var app = angular.module('codeOverwatch', ['ui.router', 'templates-main', 'codeOverwatch.overview']);
	app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			  .state('state1', {
				url: '/state1',
				templateUrl: 'templates/state1.tpl.html'
			}).state('state2', {
				url: '/state2',
				templateUrl: 'templates/state2.tpl.html'
			});
	}]);
	export var a = 'apple';
}
