var express = require ('express'); 
var app = express(); 
var fs = require('fs'); 
var objJSON = require('./about.json'); 

app.set('view engine', 'ejs'); 

app.get('/', function(req, res){
	res.render('view/index'); //view index
});

app.get('/about', function(req, res){

	fs.readFile('about.json', 'utf-8', function(err, data){
		if (err) {
			throw err;
			console.log(err)
		}
		res.render('about', JSON.parse(data));
	});
});

app.listen(3000); 
