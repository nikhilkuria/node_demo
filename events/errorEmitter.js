var EventEmitter = require('events');
var util = require('util');

function ErrorEmitter(){
    
}

util.inherits(ErrorEmitter, EventEmitter);

var errorEmitter = new ErrorEmitter();

//all errors are caught here
//errorEmitter.on('error', function(err){
//     console.log(err);
//});

//catch uncaughtexception
errorEmitter.on('uncaughtException', function(err){
    console.log(err);
    console.log('Inside uncaughtException');
})

throw 'man made error';
