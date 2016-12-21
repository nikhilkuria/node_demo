var fs = require('fs');
var path = require('path');

var filter = function(dirName, extName, callback){
  var validExt = '.'+extName;
  var validFiles = [];

  fs.readdir(dirName, function(err,data){
    if(err){
      console.log(err);
      return callback(err,null);
    }
    data.forEach(function(fileName){
      if(path.extname(fileName) === validExt){
        validFiles.push(fileName);
      }
    });
    callback(null, validFiles);
  });
}

module.exports = filter;
