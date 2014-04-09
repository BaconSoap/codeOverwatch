///<reference path="../references.ts" />

module overwatch {
	export module git {
		var app = angular.module('overwatch.git.branch',
			['ui.router', 'overwatch.git.branchesService', 'overwatch.layout.pageDataService']);

		app.config(['$stateProvider',
			($stateProvider: ng.ui.IStateProvider) => {
			$stateProvider
				.state('branch', {
					url: '/branch/:branchName',
					templateUrl: 'templates/git/branchCtrl.tpl.html',
					resolve: {
						branchInfo: ['$stateParams', 'branchesService', ($stateParams, branchesService) => {
							return branchesService.getBranchInfo($stateParams.branchName);
						}]
					},
					controller: 'branchCtrl'
				});
		}]);

		app.controller('branchCtrl', ['$scope', '$stateParams', 'pageDataService', 'branchInfo', 'branchesService',
			($scope: IBranchCtrlScope, $stateParams: any, pageDataService: layout.IPageDataService,
			 branchInfo: git.IBranch, branchesService: git.IBranchesService) => {

			$scope.viewModel = <any>{};
			$scope.viewModel.branch = branchInfo;
			pageDataService.currentPageData.pageTitle = branchInfo.name;
			$scope.filterCommits = () => {
				branchesService.getCommits(branchInfo.urlName, $scope.viewModel.username).then((commits) => {
					$scope.commits = commits;
				});
			};
		}]);

		export interface IBranchCtrlScope {
			viewModel: IBranchViewModel;
			filterCommits: () => void;
			commits: Array<git.ICommit>;
		}

		export interface IBranchViewModel {
			branch: git.IBranch;
			username;
		}
	}
}
