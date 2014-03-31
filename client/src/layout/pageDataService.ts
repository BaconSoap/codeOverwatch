///<reference path="../references.ts" />

module overwatch {
	export module layout {
		var app = angular.module('overwatch.layout.pageDataService', []);

		app.factory('pageDataService', [(): IPageDataService => {
			var service: IPageDataService = {
				currentPageData: {
					pageTitle: ''
				}
			};

			return service;
		}]);

		export interface IPageDataService {
			currentPageData: ICurrentPageData;
		}

		export interface ICurrentPageData {
			pageTitle: string;
		}
	}
}
