function rollDie(){
    return Math.floor((Math.random()*6)+1);
}


function executeRollDie(){
    return new Promise(function(resolve,reject){
        var dieVal = rollDie();
        if(dieVal % 2 == 0){
            console.log(dieVal);
            resolve(dieVal);
        }else{
            reject(dieVal);
        }
    });
}

function logDieVal(dieVal){
    console.log(dieVal);
}


function logAndContinue(dieVal){
    logDieVal('cont '+dieVal);
    return executeRollDie();
}

function logAndRestart(dieVal){
    logDieVal('rst '+dieVal);
    console.log('restart');
    startDieRoll();
}

function startDieRoll(){
    
    //todo: figure out the strange undefined in the logs
    executeRollDie()
        .then(logAndContinue, logAndRestart)
        .then(logAndContinue, logAndRestart);
    
}

startDieRoll();