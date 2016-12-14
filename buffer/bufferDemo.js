
//Creates a buffer with size 10 and prepop with 0s
var bufWithZero = Buffer.alloc(10);
console.log(bufWithZero);

//Creates a buffer with size 10 and prepop with 1s
var bufWithOne = Buffer.alloc(10,1);
console.log(bufWithOne);

//Instead of reserving memory and prepop with values
//It is possible to just reserve memory
//This can cause stray values to be present in buffer
//Interesting to see different stray values each time
var unsafeBugger = Buffer.allocUnsafe(10);
console.log(unsafeBugger);

//fill the bugger with 7s
unsafeBugger.fill(7);
console.log(unsafeBugger);


// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

// Creates a Buffer containing ASCII bytes [0x74, 0x65, 0x73, 0x74].
const buf5 = Buffer.from('test');
console.log(buf5);

// Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
const buf6 = Buffer.from('tést', 'utf8');
console.log(buf6);

//Playing around with character encodings
console.log();
console.log('Character encodings');
const buf = Buffer.from('nikhil', 'ascii');
console.log(buf);
console.log(buf.toString('hex'));
console.log(buf.toString('utf-8'));