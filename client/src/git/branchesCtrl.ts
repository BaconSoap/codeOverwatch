///<reference path="../references.ts" />

module overwatch {
	export module git {
		var app = angular.module('overwatch.git.branches', ['ui.router', 'overwatch.git.branchesService']);

		app.config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
			$stateProvider
				.state('branches', {
					url: '/branches',
					templateUrl: 'templates/git/branchesCtrl.tpl.html',
					resolve: {
						branches: ['branchesService', (branchesService) => branchesService.getBranches()]
					},
					controller: 'branchesCtrl'
				});
		}]);

		app.controller('branchesCtrl', ['$scope', 'branches',
			($scope: IBranchesCtrlScope, branches: Array<git.IBranch>) => {
			$scope.viewModel = <any>{};
			$scope.viewModel.branches = branches;
		}]);

		export interface IBranchesCtrlScope {
			viewModel: IBranchesViewModel;
		}

		export interface IBranchesViewModel {
			branches: Array<git.IBranch>;
		}
	}
}
