var http = require("http");
var cs = require("concat-stream");

var requestUrl = process.argv[2];


http.get(requestUrl, function(response){
  response.pipe(cs(function(data){
    console.log(data.toString().length);
    console.log(data.toString());
  }))
})
