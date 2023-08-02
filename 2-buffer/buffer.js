//字串轉換
// let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf4.toString());

// let buf = Buffer.from('hello');
// // console.log(buf[0].toString(2));// 01101000
// buf[0] = 95;//buffer可更改
// console.log(buf.toString());

//溢出
// let buf =Buffer.from('hello');
// buf[0] = 361;//捨棄高位數字 0001 0100 1001 =>0100 1001
// console.log(buf);

//中文
let buf = Buffer.from('安安');
console.log(buf);
