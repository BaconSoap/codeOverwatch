//used to generate services, controllers, etc

var argv = require('yargs').boolean('j').boolean('js').argv;
var handlebars = require('handlebars');
var fs = require('fs');

//globals

var _isJs = argv.j || argv.js;
var scriptSuffix = (_isJs? 'js': 'ts');
var baseTemplatePath = 'templates/' + scriptSuffix + '/';
var moduleName = argv.m;

//bindings

bindAndRunGenerator('a', 'area', 2, createArea);
bindAndRunGenerator('c', 'controller', 2, createController, true);

//generators

/**
 * create folders for an area of functionality
 * @param areaName
 */
function createArea(areaName) {
	mkdir(_srcp(areaName));
	mkdir(_testp(areaName));
	mkdir(_viewp(areaName));
}

/**
 * create a controller with matching view and spec file
 * @param fullName the full name of the controller in the form of area/controllerName
 */
function createController(fullName) {
	var paths = fullName.split('/');
	if (paths.length < 2 || typeof paths[1] === 'undefined' || paths[1].length === 0) {
		die('controller area/name is not fully specified. you should pass it in the form area/controllerName');
	}

	var area = paths[0];
	var name = paths[1].replace('Ctrl', '').replace('ctrl', '');
	var context = {moduleName: moduleName, area: area, controllerName: name, uControllerName: capitaliseFirstLetter(name)};
	createArea(area);
	parseTemplate('controller._' + scriptSuffix, _srcp(area) + name + 'Ctrl.' + scriptSuffix, context);
	createView(fullName + 'Ctrl', 'ctrl');
	parseTemplate('controller_spec._' + scriptSuffix, _testp(area) + name + 'Ctrl_spec.' + scriptSuffix, context);
	addReference(fullName + 'Ctrl.ts');
}

function createView(fullName, type) {
	if (typeof type === 'undefined') {
		type = '';
	} else {
		type = '.' + type;
	}

	var paths = fullName.split('/');
	if (paths.length < 2 || typeof paths[1] === 'undefined' || paths[1].length === 0) {
		die('view area/name is not fully specified. you should pass it in the form area/viewName');
	}

	var area = paths[0];
	var name = paths[1];

	createArea(area);
	var context = {moduleName: moduleName, area: area, controllerName: name};
	parseTemplate('view' + type + '.tpl.html', _viewp(area) + name + '.tpl.html', context, true);
}




//helpers

function capitaliseFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function _srcp(area) {
	return '../src/' + area + '/';
}

function _testp(area) {
	return '../test/unit/' + area + '/';
}

function _viewp(area) {
	return '../templates/' + area + '/';
}

function addReference(path) {
	if (_isJs) {
		return;
	}
	fs.appendFileSync('../src/references.ts', '\r\n///<reference path="' + path + '" />\r\n');
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

/**
 * die if the item specified does not exist
 * @param path
 */
function fatalShouldExist(path) {
	if (!fs.existsSync(path)) {
		die('expected item "' + path.replace('../', '') + '" to exist, but it didn\'t');
	}
}

/**
 * die if the item specified exists
 * @param path
 */
function fatalShouldNotExist(path) {
	if (fs.existsSync(path)) {
		die('expected item "' + path.replace('../', '') + '" to not exist, but it did');
	}
}

/**
 * compile a template with the given context and write the results to a file
 * @param templateName the name of the template, excluding base path but including extension
 * @param destPath the file to write to
 * @param context the variables to inject into the template's scope
 */
function parseTemplate(templateName, destPath, context, ignoreType) {
	var srcPath = (ignoreType? 'templates/all/' : baseTemplatePath ) + templateName;

	fatalShouldExist(srcPath);
	fatalShouldNotExist(destPath);
	var contents = fs.readFileSync(srcPath, 'utf8');
	var compiled = handlebars.compile(contents)(context);
	try {
		fs.writeFileSync(destPath, compiled, 'utf8');
	} catch (e) {
		die('fatal error when trying to write file at "' + destPath + '"');
	}
}