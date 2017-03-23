var split = require("split");
var through = require("through2");

var isEven = true;

var capsStream = new through(write);

function write(buffer, encoding, next){
  let strOut;
  if(isEven==true){
    isEven = false;
    strOut = buffer.toString().toLowerCase();
  }else{
    strOut = buffer.toString().toUpperCase();
    isEven = true;
  }
  strOut = strOut+"\n";
  this.push(strOut);
  next();
}


process.stdin.pipe(split(/\n/)).pipe(capsStream).pipe(process.stdout);
