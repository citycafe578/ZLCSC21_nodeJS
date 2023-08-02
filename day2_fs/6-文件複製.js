const fs = require('fs');

//方法一readFile(一次佔據全部暫存)
let data = fs.readFileSync('./筆記.txt');
fs.writeFileSync('./筆記_複製.txt', data);

//方法二 流式(分次複製，占用較少資源)
const rs = fs.createReadStream('./筆記.txt');
const ws = fs.createWriteStream('./筆記_複製2.txt');

rs.on('data', chunk=>{
    ws.write(chunk);
    console.log('複製成功')
})