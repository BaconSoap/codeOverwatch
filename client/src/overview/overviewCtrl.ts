///<reference path="../references.ts" />

module overwatch {
	export module overview {
		var app = angular.module('overwatch.overview', ['ui.router']);

		app.config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
			$stateProvider
				.state('overview', {
					url: '/',
					templateUrl: 'templates/overview/overviewCtrl.tpl.html'
				});
		}]);

		app.controller('overviewCtrl', ['$scope', ($scope: IOverviewCtrlScope) => {
			$scope.viewModel = {};
		}]);

		export interface IOverviewCtrlScope {
			viewModel: IOverviewViewModel;
		}

		export interface IOverviewViewModel {

		}
	}
}
