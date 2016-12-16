var stream = require("stream");

var rs = new stream.Readable;

rs.on('data', function(data){
    console.log('receiving data : '+data);
})

rs.on('end', function(){
    console.log('end of stream');
    console.log('The entire data from stream is : ');
    //must understand why this does not work!!!
    setImmediate(function(){
        rs.pipe(process.stdout);
    });
})

rs.push('beep ');
rs.push('boop ');
rs.push('bong ');
rs.push('bling! ');
rs.push(null);
