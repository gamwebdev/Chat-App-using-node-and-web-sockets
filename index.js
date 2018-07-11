var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000, function(){
	console.log('server is running on port 4000');
});

var io = socket(server);
io.on('connection', function(socket){
	console.log(' connection made using web sockets ' + socket.id);
});

app.use(express.static('public'));