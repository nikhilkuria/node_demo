//To have three promised waiting for each timeout to complete
//Once the three timeouts are complete, leave a message to show they are complete

function waitForAction(timeout, code){
  return new Promise(function(resolve, reject){
    setTimeout(function () {
      console.log('Performed after a timeout of '+timeout);
      resolve(code);
    }, timeout);
  })
}

Promise.all([
  waitForAction(100, "one"),
  waitForAction(2000, "two"),
  waitForAction(1000, "three")
]).then((times)=>{
  console.log("Completed all actions");
  console.log("The response from them is "+times);
})
