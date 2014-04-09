describe('this service', function () {
    var service;

    beforeEach(module('overwatch.git.branchesService'));
    beforeEach(function () {
        inject(function (branchesService) {
            service = branchesService;
        });
    });

    it('exists', function () {
        expect(service).to.not.be.an('undefined');
    });

    it('exposes the data', function () {
        expect(service.getBranches).to.not.be.an('undefined');
    });
});
