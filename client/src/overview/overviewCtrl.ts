///<reference path="../references.ts" />

module overwatch {
	export module overview {
		var app = angular.module('overwatch.overview', ['ui.router', 'overwatch.layout.pageDataService']);

		app.config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
			console.log('config overview');
			$stateProvider
				.state('overview', {
					url: '/overview',
					templateUrl: 'templates/overview/overviewCtrl.tpl.html'
				});
		}]);

		app.controller('overviewCtrl',
					  ['$scope', 'pageDataService',
			 		   ($scope: IOverviewCtrlScope, pageDataService: layout.IPageDataService) => {
			$scope.viewModel = {};
			pageDataService.currentPageData.pageTitle = 'Overiview';
		}]);

		export interface IOverviewCtrlScope {
			viewModel: IOverviewViewModel;
		}

		export interface IOverviewViewModel {

		}
	}
}
