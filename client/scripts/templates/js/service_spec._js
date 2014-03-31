describe('this service', function() {
	var service;

	beforeEach(module('{{moduleName}}.{{area}}.{{serviceName}}Service'));
	beforeEach(function() {
		inject(function({{serviceName}}Service) {
			service = {{serviceName}}Service;
		});
	});

	it('exists', function() {
		expect(service).to.not.be.an('undefined');
	});

	it('exposes the data', function() {
		expect(service.data).to.not.be.an('undefined');
	});
});
