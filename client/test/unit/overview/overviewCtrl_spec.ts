///<reference path="../../testReferences.ts" />

describe('this controller', () => {
	var ctrl;
	var scope : overwatch.overview.IOverviewCtrlScope;
	beforeEach(module('overwatch.overview'));
	beforeEach(() => {
		inject(($rootScope: ng.IRootScopeService, $controller: ng.IControllerService) => {
			scope = <any>$rootScope.$new();
			ctrl = $controller('overviewCtrl', {$scope: scope});
		});
	});

	it('exists', () => {
		expect(ctrl).to.not.be.an('undefined');
	});
});
