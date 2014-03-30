///<reference path="references.ts" />

module overwatch {
	var app = angular.module('overwatch', ['ui.router', 'templates-main', 'overwatch.overview']);
	app.constant('versionNumber', '0.0.0');
	app.config(['$stateProvider', '$urlRouterProvider',
			    ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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

	app.factory('viewModel', [() => {
		var a = {pageTitle: ''};
		return a;
	}]);
}
