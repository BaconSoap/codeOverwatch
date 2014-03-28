///<reference path="../testReferences.ts" />

describe('this app', () => {
	beforeEach(module('codeOverwatch'));
	it('works', () => {
		expect(myApp.a).to.equal('apple');
	});
});