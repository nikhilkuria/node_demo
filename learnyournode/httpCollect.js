var http = require('http');
var bl = require('bl');
var requestUrl = process.argv[2];

http.get(requestUrl, function(response){
  response.pipe(bl(function(err,data){
    if(err){
      console.error(err);
      process.exit();
    }
    console.log(data.toString().length);
    console.log(data.toString());
  }))
})
