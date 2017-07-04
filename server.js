var server = require('express');
var middleware = require('./middleware.js');
var port = 3000;
var app = server();


//To get the HTML request and response
/*app.get('/',function(req, res){
		res.send('Hello Gareta');
});*/

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
		res.send('About Us!');
});

app.use(server.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('Server started...' + 'Port : ' + port);
});