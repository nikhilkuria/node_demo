var EventEmitter = require('events');
var Util = require('util');

function EventMan(){
    
}

Util.inherits(EventMan,EventEmitter);

var eventMan = new EventMan();

//called when a new listener is added
//we are piggybacking the request to add a new event
//The fact that the event is triggered before adding the listener has a subtle but important side effect: 
//any additional listeners registered to the same name within the 'newListener' callback will be 
//inserted before the listener that is in the process of being added.
eventMan.once('newListener', function(eventName, fn){
   //fn('Nikhil');
   eventMan.on(eventName,function(name){
       console.log(name + ' loves you a lot');
   })
})

eventMan.on('love', function(name){
    console.log('I love you '+ name);
})

eventMan.emit('love', 'Kutta');
