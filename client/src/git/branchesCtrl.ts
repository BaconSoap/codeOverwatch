///<reference path="../references.ts" />

module overwatch {
	export module git {
		var app = angular.module('overwatch.git', ['ui.router', 'overwatch.git.branchesService']);

		app.config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
			$stateProvider
				.state('branches', {
					url: '/branches',
					templateUrl: 'templates/git/branchesCtrl.tpl.html'
				});
		}]);

		app.controller('branchesCtrl', ['$scope', 'branchesService',
			($scope: IBranchesCtrlScope, branchesService: overwatch.git.IBranchesService) => {
			$scope.viewModel = <any>{};
			branchesService.getBranches().then((branches) => {
				$scope.viewModel.branches = branches;
			});
		}]);

		export interface IBranchesCtrlScope {
			viewModel: IBranchesViewModel;
		}

		export interface IBranchesViewModel {
			branches: Array<git.IBranch>;
		}
	}
}
