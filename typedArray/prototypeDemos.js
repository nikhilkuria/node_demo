var buffer = new ArrayBuffer(16);

console.log('Prototype of ArrayBuffer is : '+Object.getPrototypeOf(buffer));
console.log(Object.prototype === Object.getPrototypeOf(buffer));
var int32View = new Int32Array(buffer);

//console.log('Prototype of int32Array is : '+Object.getPrototypeOf(int32View));
