//used to generate services, controllers, etc

var argv = require('yargs').boolean('j').boolean('js').argv;
var handlebars = require('handlebars');
var fs = require('fs');

//globals

var _isJs = argv.j || argv.js;
var baseTemplatePath = 'templates/' + (_isJs? 'js': 'ts') + '/';
var moduleName = argv.m;

//bindings

bindAndRunGenerator('a', 'area', 2, createArea);
bindAndRunGenerator('c', 'controller', 2, createController, true);

//generators

function createArea(areaName) {
	mkdir(_srcp(areaName));
	mkdir(_testp(areaName));
	mkdir(_viewp(areaName));
}

function createController(fullName) {
	var paths = fullName.split('/');
	if (paths.length < 2 || typeof paths[1] === 'undefined' || paths[1].length === 0) {
		die('controller area/name is not fully specified. you should pass it in the form area/controllerName');
	}

	var area = paths[0];
	var name = paths[1].replace('Ctrl', '').replace('ctrl', '');
	var context = {moduleName: moduleName, controllerName: name};
	createArea(area);
	parseTemplate('controller', _srcp(area), context);
	parseTemplate('controllerView', _viewp(area), context)
}


//helpers

function _srcp(area) {
	return '../src/' + area + '/';
}

function _testp(area) {
	return '../test/unit/' + area + '/';
}

function _viewp(area) {
	return '../templates/' + area + '/';
}

function checkParamCount(count) {
	if (argv._.length < count) {
		die('not enough params specified. you passed ' + argv._.length + ' parameters, but the generator expected at least ' + count);
	}
}

function die(message) {
	console.error(message);
	process.exit(1);
}

function mkdir(testPath) {
	var swallowError = function(){};
	if (!fs.existsSync(testPath)) {
		fs.mkdir(testPath, swallowError);
	}
}

function bindAndRunGenerator(short, long, argMin, fn, checkModuleName) {
	var type = (argv._)[0];
	if (type === short || type === long) {
		if (checkModuleName && (!moduleName || moduleName.length === 0 || typeof moduleName !== 'string')) {
			die('using a generator that requires a module name, but no module specified. use -m moduleName');
		}
		checkParamCount(argMin);
		fn((argv._)[1]);
	}
}

function parseTemplate(templateName, destPath, context) {

}