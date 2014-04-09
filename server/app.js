var log4js = require('log4js');
log4js.replaceConsole();

var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');
var route = require('./routes/routes.js');

var config = require('./config.js');

var app = module.exports = express();
app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use('/scripts', express.static(path.join(__dirname, '../client/scripts')));
app.use('/build', express.static(path.join(__dirname, '../client/build')));
app.use('/bower_components', express.static(path.join(__dirname, '../client/bower_components')));
app.use('/styles', express.static(path.join(__dirname, '../client/styles')));
app.use('/templates', express.static(path.join(__dirname, '../client/templates')));
app.use(app.router);

route(app);

http.createServer(app).listen(app.get('port'), '0.0.0.0', function () {
	console.log('Express server listening on port ' + app.get('port'));
});


