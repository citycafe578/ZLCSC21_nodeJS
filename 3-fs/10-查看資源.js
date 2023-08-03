const fs = require('fs');

//查看文件資源
fs.stat('./介紹.txt',(err,data) =>{
    if(err){
        console.log('查看失敗');
        return;
    }
    console.log(data);

    //查看類型
    console.log(data.isFile());
    //查看是否為資料夾
    console.log(data.isDirectory());
});     