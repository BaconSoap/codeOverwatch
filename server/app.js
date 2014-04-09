var log4js = require('log4js');
log4js.replaceConsole();

var express = require('express');
var http = require('http');
var GitHubApi = require("github");
var fs = require('fs');
var path = require('path');

var config = JSON.parse(fs.readFileSync('../secrets/config.json', 'utf8'));

var app = module.exports = express();
app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '/views');
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, '../client/')));
app.use(app.router);


console.info("using token: " + config.api_key);
console.info("using repo: " + config.repo);
console.info("using owner: " + config.owner)
var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com",
    timeout: 5000
});

app.get('/branches', function (req, res) {
	githubAuth();
	github.repos.getBranches({user:config.owner, repo:config.repo, per_page:100}, function(err,data){
		console.info(data.length);
		res.json(data);
	});
});

app.get('/branch/:branch', function (req, res) {
	var branchName = req.params.branch;
	githubAuth();
	github.repos.getBranch({user:config.owner, repo:config.repo, branch:branchName, per_page:100}, function(err,data){
		console.info(data.length);
		res.json(data);
	});
});

app.get('/branch/:branch', function (req, res) {
	var branchName = req.params.branch;
	githubAuth();
	github.repos.getBranch({user:config.owner, repo:config.repo, branch:branchName, per_page:100}, function(err,data){
		console.info(data.length);
		res.json(data);
	});
});

function githubAuth() {
	github.authenticate({
		type: "oauth",
		token: config.api_key
	});
}
app.get('/branch/:branch/commits', function (req, res) {
	var branchName = req.params.branch;
	var routeOptions = {user: config.owner, repo: config.repo, sha: branchName, per_page: 100};

	if (req.query.author) {
		routeOptions.author = req.query.author;
	}

	githubAuth();
	github.repos.getCommits(routeOptions, function(err,data){
		console.info(data.length);
		res.json(data);
	});
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});


