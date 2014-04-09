///<reference path="../references.ts" />

module overwatch {
	export module git {
		var app = angular.module('overwatch.git.branchesService', []);

		app.factory('branchesService', ['$http', ($http: ng.IHttpService): IBranchesService => {

			function getBranches() : ng.IPromise<Array<IBranch>> {
				return $http.get('/api/branches').then((branches) => branches.data);
			}
			var service: IBranchesService = {
				getBranches: getBranches
			};
			return service;
		}]);

		export interface IBranch {

		}

		export interface IBranchesService {
			getBranches: () => ng.IPromise<Array<IBranch>>;
		}
	}
}
