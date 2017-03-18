var http = require("http");
var cs = require("concat-stream");
var requestUrl = process.argv[2];

function concatstreamhandler(data){
  console.log(data.toString().length);
  console.log(data.toString());
}

var concatstream = cs(concatstreamhandler);

function responseHandler(response){
  response.pipe(concatstream);
}

http.get(requestUrl, responseHandler);
