var http = require('http');
var requestUrl = process.argv[2];


http.get(requestUrl, function(response){
  response.setEncoding('utf-8');

  response.on('data', function(data){
    console.log(data);
  }).on('error', function(err){
    console.log('something bad happened');
  });
})
