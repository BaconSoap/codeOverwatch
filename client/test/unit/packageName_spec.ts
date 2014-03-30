///<reference path="../testReferences.ts" />

describe('this app', () => {
	beforeEach(module('overwatch'));
	it('expect a version', inject((versionNumber) => {
		expect(versionNumber).to.not.be.an('undefined');
	}));
});
