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

    it('exposes the data', function () {
        expect(service.data).to.not.be.an('undefined');
    });
});
