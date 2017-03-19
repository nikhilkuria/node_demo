var http = require('http');

var port = process.argv[2];

function handleRequest(request, response){
  console.log('Received request : '+request.url);
  response.end("Acknowledged!!");
}

var server = http.createServer(handleRequest);

server.listen(port, function(){
  console.log("Server started and listening to port :"+port);
})
