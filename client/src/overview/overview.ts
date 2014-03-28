///<reference path="../references.ts" />

module codeOverwatch {
	var app = angular.module('codeOverwatch.overview', []);
	app.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state('overview', {
				url: '/',
				templateUrl: 'templates/overview.tpl.html'
			});
	}]);
}
