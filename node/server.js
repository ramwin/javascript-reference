// Xiang Wang @ 2017-03-10 18:06:23

var http = require('http');

http.createServer(function(request, response) {
  var body = [];
  request.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    response.write('ew');
    response.end(body);
  });
}).listen(8080);
