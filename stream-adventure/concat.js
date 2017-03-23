var concat = require("concat-stream");

process.stdin.pipe(concat(function(body){
  let revStr = body.toString().split("").reverse().join("");
  console.log(revStr);
}))
