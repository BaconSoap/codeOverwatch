describe('this controller', function () {
    var ctrl;
    var scope;
    beforeEach(module('overwatch.overview'));
    beforeEach(function () {
        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('overviewCtrl', { $scope: scope });
        });
    });

    it('exists', function () {
        expect(ctrl).to.not.be.an('undefined');
    });
});
