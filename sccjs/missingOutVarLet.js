function foo(){
  // miss to add var or let and the variable is defined in the global context
  foo = "Global";
  var poo = "Local";
}

foo();

console.log(foo);
console.log(poo);
