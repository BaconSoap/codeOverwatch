var GitHubApi = require("./github.js");
var config = require('../config.js');
var github = GitHubApi.client;
var githubAuth = GitHubApi.auth;
module.exports = function(app) {
	console.info('initializing /api/branch/:branch');

	app.get('/api/branch/:branch', function (req, res) {
		var branchName = req.params.branch;
		githubAuth();
		github.repos.getBranch({user:config.owner, repo:config.repo, branch:branchName, per_page:100}, function(err,data){
			console.info(data.length);
			res.json(data);
		});
	});
}