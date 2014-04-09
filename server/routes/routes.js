var config = require('../config.js');
var fs = require('fs');
var branches = require('./branchesRoute.js');
var branch = require('./branchRoute.js');
var branchCommits = require('./branchCommits.js');

module.exports = function(app) {
	console.info('initializing routes');
	branches(app);
	branch(app);
	branchCommits(app);

	console.info('initializing catch-all route');
	app.all('/*', function(req, res, next) {
		// Just send the index.html for other files to support HTML5Mode
		res.sendfile('index.html', { root: __dirname + "/../../client/" });
	});
};