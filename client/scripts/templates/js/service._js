var {{moduleName}};
(function({{moduleName}}) {
	var {{area}};
	(function({{area}}) {
		var app = angular.module('{{moduleName}}.{{area}}.{{serviceName}}Service', []);

		app.factory('{{serviceName}}Service', [function() {
			var service = {
				data: ''
			};
			return service;
		}]);
	})({{area}} || ({{area}} = {}));
})({{moduleName}} || ({{moduleName}} = {}));
