//引入fs
const fs = require('fs');

//異步讀取
fs.readFile('./流式寫入.txt', (err,data) => {
    if(err){
        console.log('讀取失敗');
        return;
    }
    //由漁會輸出ASCII碼，因此用toString轉換
    console.log(data.toString());
});

//同步讀取
let data = fs.readFileSync('./介紹.txt');
console.log(data.toString());