//引入fs
const fs = require('fs');

//創建讀取對象
const rs = fs.createReadStream('流式寫入.txt');

//綁定事件
rs.on('data', chunk =>{
    console.log (chunk.toString());
})

//可選事件
rs.on('end', () => {
    console.log('讀取完成');
});