///<reference path="../references.ts" />

module overwatch {
	export module git {
		var app = angular.module('overwatch.git.branchesService', []);

		app.factory('branchesService', ['$http', ($http: ng.IHttpService): IBranchesService => {

			function getBranches() : ng.IPromise<Array<IBranch>> {
				return $http.get('/api/branches', {cache: true})
					.then((branches) => branches.data)
					.then((branches: Array<IBranch>) => {
						for (var i = 0; i < branches.length; i++) {
							branches[i].urlName = branches[i].name.replace('/', '%2F');
						}
						return branches;
					});
			}

			function getBranchInfo(branchName: string): ng.IPromise<IBranch> {
				return $http.get('/api/branch/' + branchName, {cache: true})
					.then((branch) => branch.data)
					.then((branch: IBranch) => {
						branch.urlName = branch.name.replace('/', '%2F');
						return branch;
					});
			}

			function getCommits(branchName: string, userName: string): ng.IPromise<Array<ICommit>> {
				return $http.get('/api/branch/' + branchName + '/commits?author=' + userName, {cache: true})
					.then((commits) => commits.data);
			}

			var service: IBranchesService = {
				getBranches: getBranches,
				getBranchInfo: getBranchInfo,
				getCommits: getCommits
			};
			return service;
		}]);

		export interface IBranch {
			name: string;
			urlName?: string;
		}

		export interface IBranchesService {
			getBranches: () => ng.IPromise<Array<IBranch>>;
			getBranchInfo: (branchName: string) => ng.IPromise<IBranch>;
			getCommits: (branchName: string, username: string) => ng.IPromise<Array<ICommit>>;
		}

		export interface ICommit {

		}
	}
}
