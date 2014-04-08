var http = require('http');
var GitHubApi = require("github");
var fs = require('fs');

var config = JSON.parse(fs.readFileSync('../secrets/config.json', 'utf8'));
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

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	github.authenticate({
		type: "oauth",
		token: config.api_key
	});
	github.repos.getBranch({user:config.owner, repo:config.repo, branch:"master"}, function(err,data){
		res.end(JSON.stringify(data));
	});
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
