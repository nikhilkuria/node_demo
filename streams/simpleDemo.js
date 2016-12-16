var fs = require("fs");

var readableStream = fs.createReadStream('file.txt', 'utf-8');

readableStream.on('data', function(data){
    console.log('withing data');
   // console.log(data);
});

readableStream.on('end', function(){
    console.log('end');
})