//console.log('hello node.js');
//console.log(global);
//console.log(globalThis === global);

//buffer
//1.alloc
//會歸零但慢
let buf = Buffer.alloc(10);
//console.log(buf);

//2.allocUnsafe
let buf2 = Buffer.allocUnsafe(10);
//部會歸零但是快
//console.log(buf2);

//3.from
//將字串轉為ACSII碼然後再轉成10進位，建立占存
let buf3 = Buffer.from('hello');
let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
//console.log(buf3);
console.log(buf4);

