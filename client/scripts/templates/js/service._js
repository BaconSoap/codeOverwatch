var {{moduleName}};
(function({{moduleName}}) {
	var {{area}};
	(function({{area}}) {
		var app = angular.module('{{moduleName}}.{{area}}', []);

		app.controller('{{serviceName}}Service', [function() {
			var service = {
				data: ''
			};
			return service;
		}]);
	})({{area}} || ({{area}} = {}));
})({{moduleName}} || ({{moduleName}} = {}));
