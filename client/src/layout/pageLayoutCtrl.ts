///<reference path="../references.ts" />

module overwatch {
	export module layout {
		var app = angular.module('overwatch.layout', ['ui.router', 'overwatch.layout.pageDataService']);

		app.controller('pageLayoutCtrl',
						['$scope', 'pageDataService',
						 ($scope: IPageLayoutCtrlScope, pageDataService: IPageDataService) => {
			$scope.viewModel = <any>{};
			$scope.viewModel.pageData = pageDataService.currentPageData;
		}]);

		export interface IPageLayoutCtrlScope {
			viewModel: IPageLayoutViewModel;
		}

		export interface IPageLayoutViewModel {
			pageData: ICurrentPageData;
		}
	}
}
