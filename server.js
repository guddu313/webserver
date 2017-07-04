var server = require('express');
var port = 3000;

var app = server();


//To get the HTML request and response
/*app.get('/',function(req, res){
		res.send('Hello Gareta');
});*/

var middleware = {
		requireAuthentication: function(req, res, next){
				console.log('private route hit!');
				next();
		},
		logger: function(req, res, next){
				console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
				next();
		}
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
		res.send('About Us!');
});

app.use(server.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('Server started...' + 'Port : ' + port);
});