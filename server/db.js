var sqlite = require('sqlite3');
var Q = require('q');

var db = new sqlite.Database('app.db', function(err) {
	if (err) {
		console.error('couldn\'t connect to database!');
		console.error(err);
		process.exit(1);
	} else {
		console.info('database connection initialized');
	}
});

// promisify database operations
var dbGet = Q.nbind(db.get, db);
var dbEach = Q.nbind(db.each, db);
var dbRun = Q.nbind(db.run, db);
var dbAll = Q.nbind(db.all, db);
var dbExec = Q.nbind(db.exec, db);

module.exports = {
	get: dbGet,
	each: dbEach,
	run: dbRun,
	all: dbAll,
	exec: dbExec
};