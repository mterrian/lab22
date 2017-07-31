var express = require('express');
var app = express();
var routes = require('./routes');

app.use('/test', routes);
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('app server running at http://localhost:%s', port)
});