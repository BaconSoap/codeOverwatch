var GitHubApi = require("github");
var fs = require('fs');
var config = require('../config.js');

console.info('initializing github configuration');

var client = new GitHubApi({
	// required
	version: "3.0.0",
	// optional
	debug: true,
	protocol: "https",
	host: "api.github.com",
	timeout: 5000
});

function auth() {
	client.authenticate({
		type: "oauth",
		token: config.api_key
	});
}

console.info("using token: " + config.api_key);
console.info("using repo: " + config.repo);
console.info("using owner: " + config.owner);


module.exports = {
	client: client,
	auth: auth
};