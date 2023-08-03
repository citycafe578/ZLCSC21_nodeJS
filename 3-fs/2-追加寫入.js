//引入fs
const fs = require('fs');

//使用appendFile函式(異步)
//('./路徑', '追加內容', '條件(可選')
fs.appendFile('./筆記.txt', '，這是第二段筆記', err =>{
    if(err){
        console.log('寫入失敗');
        return;
    }
    console.log('寫入成功');
});


//writeFile函式追加寫入
//('./路徑', '追加內容', '{flag:'模式'},'條件(可選')
//
fs.writeFile('./筆記.txt', ',記得要用a模式', {flag:'a'},err=>{
    if(err){
        console.log('追加失敗');
        return;
    }
    console.log('追加成功');
});

//使用appendFileSync函式A(同步)
//('./路徑', '追加內容')
fs.appendFileSync('./同步筆記.txt', '\r\n這樣可以換行');