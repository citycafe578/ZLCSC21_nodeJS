//新增文件 並寫入內容

//引用FS模組
const fs = require('fs');

//異步寫入文件(高效)
//('./路徑', '內容', '條件(可選')
fs.writeFile('./筆記.txt', '這裡是筆記內容', err =>{
    //err 寫入失敗:錯誤對象 寫入成功:null
    if(err){
        console.log('寫入失敗');
        return;
    }
    console.log('寫入成功')
})

//同步寫入文件(穩定)
fs.writeFileSync('./同步筆記.txt', '這裡是同步筆記');