var http = require("http");
var Httpdispatcher = require("httpdispatcher");
var url = require("url");

var dispatcher = new Httpdispatcher();

dispatcher.onGet("/api/parsetime", function(request, response){
  let dateToParse = url.parse(request.url, true).query.iso;
  date = new Date(dateToParse);
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let parsedTime = {
    "hour":hour,
    "minute":minute,
    "second":second
  }

  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify(parsedTime));
});

dispatcher.onGet("/api/unixtime", function(request, response){
  let dateToParse = url.parse(request.url, true).query.iso;
  date = new Date(dateToParse);
  let parsedTime = {
    "unixtime":date.getTime()
  }
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify(parsedTime));
});

function handler(request, response){
  dispatcher.dispatch(request, response);
}

var server = http.createServer(handler);

server.listen(process.argv[2]);
