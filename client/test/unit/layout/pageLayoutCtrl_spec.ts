///<reference path="../../testReferences.ts" />

describe('this controller', () => {
	var ctrl;
	var scope : overwatch.layout.IPageLayoutCtrlScope;
	beforeEach(module('overwatch.layout'));
	beforeEach(() => {
		inject(($rootScope: ng.IRootScopeService, $controller: ng.IControllerService) => {
			scope = <any>$rootScope.$new();
			ctrl = $controller('pageLayoutCtrl', {$scope: scope});
		});
	});

	it('exists', () => {
		expect(ctrl).to.not.be.an('undefined');
	});
});
