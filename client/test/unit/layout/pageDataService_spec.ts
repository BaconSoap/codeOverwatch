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

	it('exposes current page data', () => {
		expect(service.currentPageData).to.not.be.an('undefined');
	});
});
