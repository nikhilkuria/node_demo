var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2,5);
var urlResults = [];
var urlPromises = [];

function getUrl(url){
    return new Promise(function(resolve,reject){
        http.get(url, function(response){
            response.pipe(bl(function(err,data){
              if(err){
                console.log('An error ocured');
                console.error(err);
                process.exit();
              }
              urlResults[url] = data.toString();
              resolve();
            }))
        });
    })
}

for (var i = 0; i < urls.length; i++) {
  var url = urls[i];
  urlPromises.push(getUrl(url));
}


Promise.all(urlPromises).then(function(){
    for (var i = 0; i < urls.length; i++) {
      var url = urls[i];
      console.log(urlResults[url]);
    }
});