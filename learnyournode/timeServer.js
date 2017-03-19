var dateProvider = require('./simpleDate.js');
var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket){
  var date = dateProvider.getDate();
  var response = date + '\n';
  socket.end(response);
});

server.listen(port);
