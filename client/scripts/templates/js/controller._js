var {{moduleName}};
(function({{moduleName}}) {
	var {{area}};
	(function({{area}}) {
		var app = angular.module('{{moduleName}}.{{area}}', ['ui.router']);

		app.config(['$stateProvider', function($stateProvider){
			$stateProvider
				.state('{{controllerName}}', {
					url: '/URL',
					templateUrl: 'templates/{{area}}/{{controllerName}}Ctrl.tpl.html'
				});
		}]);

		app.controller('{{controllerName}}Ctrl', ['$scope', function($scope) {
			$scope.viewModel = {};
		}]);
	})({{area}} || ({{area}} = {}));
})({{moduleName}} || ({{moduleName}} = {}));
