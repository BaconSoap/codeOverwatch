///<reference path="references.ts" />

module overwatch {
	var app = angular.module('overwatch', ['ui.router', 'templates-main', 'overwatch.overview',
		'overwatch.git', 'overwatch.layout']);
	app.constant('versionNumber', '0.0.0');
	app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
			    ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider,
				 $locationProvider: ng.ILocationProvider) => {
		console.log('config base');
		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise('/overview');
		$stateProvider
			  .state('state1', {
				url: '/state1',
				templateUrl: 'templates/state1.tpl.html'
			}).state('state2', {
				url: '/state2',
				templateUrl: 'templates/state2.tpl.html'
			});
	}]);

	//hack to make ui-view work when it is ng-included
	app.run(['$state', ($state) => angular.noop($state)]);

	app.factory('viewModel', [() => {
		var a = {pageTitle: 'The pagetitle should be changed for this state'};
		return a;
	}]);
}
