var filter = require('./filter.js');
var dirName = process.argv[2];
var validExt = process.argv[3];

filter(dirName, validExt, function(err,data){
  if(err){
    console.log(err);
    process.exit();
  }
  data.forEach(function(fileName){
    console.log(fileName);
  })
})
