const fs = require('fs');

//文件複製
fs.rename('./筆記_複製.txt', './被我改名的筆記_複製.txt',err =>{
    if(err){
        console.log('改名失敗');
        return;
    }
    console.log('改名成功');
})

//文件移動
fs.rename('./要偷走的物品.txt',  '../2-buffer/要偷走的物品.txt',err => {
    if(err){
        console.log('複製失敗');
        return;
    }
    console.log('複製成功');
})