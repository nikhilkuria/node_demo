var through = require("through2");

var stream = new through(write);

function write(buffer, encoding, next){
  let inUpper = buffer.toString().toUpperCase();
  this.push(inUpper);
  next();
}

process.stdin.pipe(stream).pipe(process.stdout);
