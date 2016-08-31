// server js file.

// ---------Module declarations--------------------
var express = require('express');
var app = express();
var path = require('path');
//var sslRedirect = require('heroku-ssl-redirect');

/*var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var methodOverride = require('method-override');
var Schema = mongoose.Schema;
//var favicon = require('favicon');*/
var port = process.env.port || 7070;

/*// Database connections

var connection = mongoose.connect('mongodb://localhost/crkappi');

// Defining database schema

var questionSchema = new Schema({
	QuestCateg : String,
	QuestDCateg : String,
	QuestTxt : String,
	AnswerTxt : String
});

var loginSchema = new Schema({
	uname: String, passwd: String
});

var loginchk = mongoose.model('dumusrs', loginSchema);
var Question = mongoose.model('dummyQuestion', questionSchema);
*/
//-----------  configuration --------------------


app.use(express.static(path.join(__dirname, 'public')));
/*//app.use(express.static(path.join(__dirname, 'node_modules')));
//app.use('/node_modules', express.static(__dirname, '/node_modules'));
////app.use(express.static(path.join(__dirname, '/node_modules')));
//app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
app.use(methodOverride());

//routes----------------------------
//get all Questions

app.get('/api/questions', function(request, response){

	// conditional selecting
	//Acquring records with specific Question Category and Question Difficulty Level
	console.log('Hello from Get request in server.js');
	if( request.query.QuestCateg && request.query.QuestDCateg ){

		Question.find({ QuestCateg : request.query.QuestCateg, QuestDCateg : request.query.QuestDCateg }, function(err,questions){

			//In case of error return the error to response.

			if(err)
				response.send(err);
			response.json(questions);
		});
	}else{
		//Acquring records with specific Question Category
		if( request.query.QuestCateg ){			
			Question.find( { QuestCateg : request.query.QuestCateg }, function(err, questions){

				//In case of error return the error to reponse
				if(err)
					response.send(err);
				response.json(questions);
			});
		}else{
			//Acquring All records from MongoDB
			Question.find(function(err, questions){

				//In case of error return the error to reponse
				if(err)
					response.send(err);
				response.json(questions);
			});
		}
	}
});

// Create question and send back all question after creation

app.post('/api/questions', function(request, response){

	// Create a question, information comes from ajax request from angular
	if ( request.body.QuestCateg && request.body.QuestDCateg && request.body.QuestTxt && request.body.AnswerTxt){
		console.log('A ok for new Insertion into mongoDB');
		Question.create({
			QuestCateg : request.body.QuestCateg,
			QuestDCateg : request.body.QuestDCateg,
			QuestTxt : request.body.QuestTxt,
			AnswerTxt : request.body.AnswerTxt,
			done : false
		}, function(err, questions){
			if(err)
				response.send(err);

			//Repopulating the view after insert a new row in the collection

			Question.find(function(err, questions){

				//if there is an error retrieving data, send the error.

				if(err)
					response.send(err);
				response.json(questions);
			});
		});
	}
	

});

//deleting a quesion

app.delete('/api/questions/:question_id', function(request, response){

	// deleting or removing a question based on the id.

	Question.remove({
		_id : request.params.question_id
	},function(err, question){
		if(err)
			response.send(err);

		//get and return all questions after deletion of a question

		Question.find(function(err, questions){

			//if error retrieving data, send the error.

			if(err)
				response.send(err);
			response.json(questions);
		});
	});
});

// checking for existing users.

app.get('/api/logs', function(request, response){

	//console.log('Hello from Get request in server.js');
	loginchk.find({ uname : request.query.uname, passwd : request.query.passwd }, function(err,logs){
	//In case of error return the error to response.
		if(err)
			response.send(err);
		response.json(logs);
		//console.log('Value from DB' + logs);
		});
});*/


//----------------------application----------------------------------------------
// defining a front end route

// enable ssl redirect
//app.use(sslRedirect(['production'], 301));

app.get('*',function(request, response){
	response.sendFile(path.resolve(__dirname + '/index.html'));	
	//('./public/index.html');
});

//listening to node server port -----------------------------------------------

app.listen(port, function(){
	console.log('Node Server Listening in port' + port);
});