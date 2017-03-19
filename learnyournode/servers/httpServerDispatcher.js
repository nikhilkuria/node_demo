var http = require("http");
var Httpdispatcher = require("httpdispatcher");

var port = process.argv[2];

var dispatcher = new Httpdispatcher();

dispatcher.onGet("/hello", function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World');
})

dispatcher.onGet("/bye", function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Bye World');
})

function handleRequest(request, response){
    dispatcher.dispatch(request, response);
}


var server = http.createServer(handleRequest);


server.listen(port, function(){
  console.log("server started and listening to port "+port);
})
