///<reference path="../references.ts" />

module overwatch {
	export module layout {
		var app = angular.module('overwatch.layout', ['ui.router']);

		app.controller('pageLayoutCtrl', ['$scope', ($scope: IPageLayoutCtrlScope) => {
			$scope.viewModel = {};
		}]);

		export interface IPageLayoutCtrlScope {
			viewModel: IPageLayoutViewModel;
		}

		export interface IPageLayoutViewModel {

		}
	}
}
