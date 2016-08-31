// server js file.

// ---------Module declarations--------------------
var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var server = http.createServer(function(request, response){});
var port_number = server.listen(process.env.port || 7070);

//-----------  configuration --------------------

app.use(express.static(path.join(__dirname, 'public')));

//----------------------application----------------------------------------------
// defining a front end route

app.get('/',function(request, response){
	response.sendFile(path.resolve(__dirname + '/index.html'));	

});

//listening to node server port -----------------------------------------------

app.listen(port_number, function(){
	console.log('Node Server Listening in port' + port_number);
});