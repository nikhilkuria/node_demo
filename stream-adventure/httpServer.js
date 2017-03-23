var http = require("http");
var through = require("through2");

var throughStream = new through(write);
var port = process.argv[2];

function write(buffer, encoding, next){
  let inUpper = buffer.toString().toUpperCase();
  this.push(inUpper);
  next();
}

function handler(request, response){
  if (request.method !== 'POST') {
        return res.end('send me a POST\n')
  }
  request.pipe(throughStream).pipe(response);
}

var server = http.createServer(handler);

server.listen(port);
