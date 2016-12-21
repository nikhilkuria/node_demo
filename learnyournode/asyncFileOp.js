var fs = require('fs');

if(process.argv[2] == undefined){
  console.log('Bitte enter ein File name');
  process.exit();
}

var countLines = function(err, data){
  if(err){
    console.log('something went wrong');
    process.exit();
  }

  console.log(data.split('\n').length-1);
}

fs.readFile(process.argv[2],'utf-8',countLines);
