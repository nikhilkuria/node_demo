var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2,5);
var urlResults = [];
var responseCount = 0;

for (var i = 0; i < urls.length; i++) {
  var url = urls[i];
  callUrl(url);

}

function callUrl(url){
  http.get(url, function(response){
    response.pipe(bl(function(err,data){
      if(err){
        console.log('An error ocured');
        console.error(err);
        process.exit();
      }
      urlResults[url] = data.toString();
    }))

  });
}

setInterval(function(){
  if(Object.keys(urlResults).length==3){
    for (var i = 0; i < urls.length; i++) {
      var url = urls[i];
      console.log(urlResults[url]);
    }
    process.exit();
  }
},1000);
