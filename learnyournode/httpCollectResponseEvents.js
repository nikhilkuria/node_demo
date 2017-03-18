var http = require("http");

var requestUrl = process.argv[2];

var responseData = "";

http.get(requestUrl, function(response){
  response.setEncoding('utf-8');
  response.on('data', function(data){
    responseData = responseData.concat(data);
  }).on('error', function(err){
    console.log('something bad happened');
  }).on('end', function(data){
    console.log(responseData.length);
    console.log(responseData);
  });
})
