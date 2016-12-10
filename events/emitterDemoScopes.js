var EventEmitter = require('events');
var util = require('util');


function Emitter(){
    var self = this;
    //closure to pass value 
    //'nikhil' passed as param
    setTimeout(function(){
        self.emit('rain', 'nikhil');
    },1000);
    
    setTimeout(function(){
        self.emit('snow', 'neha');
    },1000);
}

util.inherits(Emitter, EventEmitter);

var emitter = new Emitter();

//use on to set a regualar event
emitter.on('rain', function(author){
    console.log('When rain comes down, umbrellas go up : '+author);
    //console.log(this);
});

//multiple listeners for same event
emitter.on('rain', function(author){
    console.log('When rain comes down, we also use raincoats : '+author);
})

emitter.once('snow', function(author){
    console.log('When snow comes down, run for shelter : '+author);
    //console.log(this);
});

console.log('calling sync event');

emitter.emit('rain', 'nikhil');
emitter.emit('snow', 'nikhil');