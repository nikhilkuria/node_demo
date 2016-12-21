var fs = require('fs');

if(process.argv[2]==undefined){
  console.log('Expecting file name as param');
  process.exit();
}

var fileName = process.argv[2];

var contents = fs.readFileSync(fileName, 'utf-8');

console.log(contents.split('\n').length-1);
