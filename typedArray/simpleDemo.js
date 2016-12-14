console.log('Simple demo of typed arrays');

//initialize buffer with zero values
var buffer = new ArrayBuffer(process.argv[2]);

console.log('Created a buffer of length : '+buffer.byteLength);

//little to be done from the buffer
//we need to create views

console.log('The buffer is accessed using views : Ex:Int32Array, Int16Array');

console.log();
console.log('Working with int32Array. uses 4 bytes')
//Note that int32Vies uses 4 bytes for a entry
//For us the number of entries would be buffer.byteLength/4
var int32View = new Int32Array(buffer);

for (var i = 0; i < int32View.length; i++) {
  console.log(int32View[i]);
}

console.log('inserting values to buffer');

for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

for (var i = 0; i < int32View.length; i++) {
  console.log(int32View[i]);
}

console.log();

//multiple buffers are possible on the same ArrayBuffer
console.log('Working with int16Array. uses 2 bytes')
//Note that int32Vies uses 4 bytes for a entry
//For us the number of entries would be buffer.byteLength/4
var int16View = new Int16Array(buffer);

for (var i = 0; i < int16View.length; i++) {
  console.log(int16View[i]);
}

console.log();

console.log('inserting values to buffer');

for (var i = 0; i < int16View.length; i++) {
  int16View[i] = i * 2;
}

for (var i = 0; i < int16View.length; i++) {
  console.log(int16View[i]);
}

console.log();

//convert to regular array
var regularArray = Array.from(int16View);

console.log(regularArray);
