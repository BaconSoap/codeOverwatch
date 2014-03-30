var {{moduleName}};
(function({{moduleName}}) {
	var {{area}};
	(function({{area}}) {
		var app = angular.module('{{moduleName}}.{{area}}', []);
		app.controller('{{controllerName}}Ctrl', ['$scope', '$stateProvider', function($scope, $stateProvider) {
			$scope.viewModel = {};
			$stateProvider
				.state('{{controllerName}}', {
					url: '/URL',
					templateUrl: 'templates/{{controllerName}}.tpl.html'
				});
		}]);
	})({{area}} || ({{area}} = {}));
})({{moduleName}} || ({{moduleName}} = {}));