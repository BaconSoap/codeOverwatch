var GitHubApi = require("./github.js");
var config = require('../config.js');
var github = GitHubApi.client;
var githubAuth = GitHubApi.auth;
module.exports = function(app) {
	console.info('initializing /api/branches');

	app.get('/api/branches', function (req, res) {
		githubAuth();
		github.repos.getBranches({user:config.owner, repo:config.repo, per_page:100}, function(err,data){
			console.info(data.length);
			res.json(data);
		});
	});
}