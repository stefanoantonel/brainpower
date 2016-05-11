#!/bin/env node
//  Heroku deploy example
var request = require('request');
var favicon = require('serve-favicon');
var express = require('express');
var fs      = require('fs');
var app 	  = express();
var index   = fs.readFileSync('app/index.html');

app.set('port', (process.env.PORT || 5000));

// app.set('view engine', 'jade');
/*app.use(favicon(__dirname + '/app/favicon.ico'));*/
app.use(express.static('app'));

app.get("/", function(request, response){ //root dir
  response.writeHead(200, {'Content-Type': 'html'});
  response.end(index);
});

app.get("*", function(request, response){ //root dir
  response.writeHead(200, {'Content-Type': 'html'});
  response.end(index);
});

// app.get('/', function (req, res) {
// 	res.render('index', {
// 		title: 'Evangelio',
// 		gospel: Gospel.gospel,
// 		reflexion: Gospel.reflexion
// 	});
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
