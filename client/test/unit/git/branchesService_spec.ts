///<reference path="../../testReferences.ts" />

describe('this service', () => {
	var service: overwatch.git.IBranchesService;

	beforeEach(module('overwatch.git.branchesService'));
	beforeEach(() => {
		inject((branchesService) => {
			service = branchesService;
		});
	});

	it('exists', () => {
		expect(service).to.not.be.an('undefined');
	});

	it('exposes the data', () => {
		expect(service.getBranches).to.not.be.an('undefined');
	});
});
