var http = require("http");
var map = require("through2-map");

var port = process.argv[2];

function handler(request,response){
  if (req.method !== 'POST') {
        return res.end('send me a POST\n')
  }
  request.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(response);
}

var server = http.createServer(handler);

server.listen(port);
