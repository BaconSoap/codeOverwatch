///<reference path="../references.ts" />

module overwatch {
	module overview {
		var app = angular.module('overwatch.overview', []);
		app.config(['$stateProvider', ($stateProvider) => {
			$stateProvider
				.state('overview', {
					url: '/',
					templateUrl: 'templates/overview.tpl.html'
				});
		}]);
	}
}
