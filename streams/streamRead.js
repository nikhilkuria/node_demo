var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
rs._read = function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) {
        rs.push('\n');
        rs.push(null);
    }
};

setTimeout(function () {
  rs.pipe(process.stdout);
}, 1);

rs.on('end', function(){
    console.log('end of stream');

})

process.stdout.on('error', function(){
  console.log("hello");
  process.exit;
});
