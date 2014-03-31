///<reference path="../../testReferences.ts" />

describe('this service', () => {
	var service: overwatch.layout.IPageDataService;

	beforeEach(module('overwatch.layout.pageDataService'));
	beforeEach(() => {
		inject((pageDataService) => {
			service = pageDataService;
		});
	});

	it('exists', () => {
		expect(service).to.not.be.an('undefined');
	});

	it('exposes the data', () => {
		expect(service.data).to.not.be.an('undefined');
	});
});
