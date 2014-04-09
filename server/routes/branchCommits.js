var GitHubApi = require("./github.js");
var config = require('../config.js');
var github = GitHubApi.client;
var githubAuth = GitHubApi.auth;
module.exports = function(app) {
	console.info('initializing /api/branch/:branch/commits');

	app.get('/api/branch/:branch/commits', function (req, res) {
		var branchName = req.params.branch;
		var routeOptions = {user: config.owner, repo: config.repo, sha: branchName, per_page: 100};

		if (req.query.author) {
			routeOptions.author = req.query.author;
		}

		githubAuth();
		github.repos.getCommits(routeOptions, function(err,data){
			console.info(data.length);
			for (var i = 0; i < data.length; i++){
				data[i].htmlUrl = 'https://github.com/' + config.owner + '/' + config.repo + '/commit/' + data[i].sha;
			}
			res.json(data);
		});
	});
}