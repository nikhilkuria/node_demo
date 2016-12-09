var EventEmitter = require('events');
var util = require('util');

console.log('Demonstrating event emitter');

function EmitterWithEventInConstructor() {
    //This is not placed in the event queue.
    //Tying to call this sync
    //Will not work, and 'an event occured is not printed to the console'
    this.emit('event');
}

//Inherittin to call the emit
util.inherits(EmitterWithEventInConstructor, EventEmitter);

var emitterWithEventInConstructor = new EmitterWithEventInConstructor();

emitterWithEventInConstructor.on('event', () => {
    console.log('an event occurred!');
});
emitterWithEventInConstructor.once('newEvent', () => {
    console.log('new Event occured!')
})

emitterWithEventInConstructor.emit('newEvent');

console.log();

console.log('With Async');

function EmitterWithEventInConstructedAsyncCall(){
    var instance = this;
    //EventEmitter.call(instance);
    //setImmediate pushes the function to the event queue.
    //Async!
    setImmediate(function(){
        //console.log(instance);
        instance.emit('event');
    }, this);
}

var callEvent = function(){
    console.log(this);
    //this.emit('event');
}

util.inherits(EmitterWithEventInConstructedAsyncCall, EventEmitter);


var emitterWithEventInConstructedAsyncCall = new EmitterWithEventInConstructedAsyncCall();


emitterWithEventInConstructedAsyncCall.on('event', () => {
    console.log('an event occurred!');
});
emitterWithEventInConstructedAsyncCall.once('newEvent', () => {
    console.log('new Event occured!')
})

emitterWithEventInConstructedAsyncCall.emit('newEvent');
