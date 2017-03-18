var fs = require('fs');
var path = require('path');
var dirName = process.argv[2];
var validExt = "."+process.argv[3];

var filterFile = function(err,data){
  if(err){
    console.log(err);
  }

  data.forEach(function(fileName){
    if(path.extname(fileName) === validExt){
      console.log(fileName);
    }
  })
}

fs.readdir(dirName,validExt,filterFile);
