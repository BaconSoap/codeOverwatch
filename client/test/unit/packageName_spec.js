describe('this app', function () {
    beforeEach(module('overwatch'));
    it('expect a version', inject(function (versionNumber) {
        expect(versionNumber).to.not.be.an('undefined');
    }));
});
