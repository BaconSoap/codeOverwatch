///<reference path="../references.ts" />

module overwatch {
	export module layout {
		var app = angular.module('overwatch.layout.pageDataService', []);

		app.factory('pageDataService', [(): IPageDataService => {
			var service: IPageDataService = {
				data: ''
			};
			return service;
		}]);

		export interface IPageDataService {
			data: any;
		}
	}
}
