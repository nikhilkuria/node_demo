var request = require("request");

var postReq = request.post("http://localhost:8099");

process.stdin.pipe(postReq).pipe(process.stdout);
