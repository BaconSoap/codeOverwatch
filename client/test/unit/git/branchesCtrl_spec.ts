///<reference path="../../testReferences.ts" />

describe('this controller', () => {
	var ctrl;
	var scope : overwatch.git.IBranchesCtrlScope;
	beforeEach(module('overwatch.git'));
	beforeEach(() => {
		inject(($rootScope: ng.IRootScopeService, $controller: ng.IControllerService) => {
			scope = <any>$rootScope.$new();
			ctrl = $controller('branchesCtrl', {$scope: scope});
		});
	});

	it('exists', () => {
		expect(ctrl).to.not.be.an('undefined');
	});
});
