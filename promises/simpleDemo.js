
function rollDie(){
    return Math.floor((Math.random()*6)+1);
}

console.log('Starts here..')

var promise = new Promise(function(fullfill,reject){
    var dieVal = rollDie();
    
    if(dieVal===6){
        fullfill(dieVal);
    }else{
        reject(dieVal);
    }
})

console.log('to prove promise does not block');

promise.then(function(toss) {
  console.log('Yay, threw a ' + toss + '.');  
}, function(toss) {
  console.log('Oh, noes, threw a ' + toss + '.');  
});