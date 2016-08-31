// server js file.

// ---------Module declarations--------------------
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 7070;

//-----------  configuration --------------------


app.use(express.static(path.join(__dirname, 'public')));

//----------------------application----------------------------------------------
// defining a front end route


app.get('*',function(request, response){
	response.sendFile(path.resolve(__dirname + '/index.html'));	

});

//listening to node server port -----------------------------------------------

app.listen(port, function(){
	console.log('Node Server Listening in port' + port);
});