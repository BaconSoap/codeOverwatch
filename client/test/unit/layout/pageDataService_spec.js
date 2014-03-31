describe('this service', function () {
    var service;

    beforeEach(module('overwatch.layout.pageDataService'));
    beforeEach(function () {
        inject(function (pageDataService) {
            service = pageDataService;
        });
    });

    it('exists', function () {
        expect(service).to.not.be.an('undefined');
    });

    it('exposes current page data', function () {
        expect(service.currentPageData).to.not.be.an('undefined');
    });
});
