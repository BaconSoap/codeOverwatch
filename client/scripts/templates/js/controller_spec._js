describe('this controller', function() {
	var ctrl, scope;
	beforeEach(module('{{moduleName}}.{{area}}'));
	beforeEach(function(){
		inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			ctrl = $controller('{{controllerName}}Ctrl', {$scope: scope});
		});
	});

	it('exists', function() {
		expect(ctrl).to.not.be.an('undefined');
	});
});
