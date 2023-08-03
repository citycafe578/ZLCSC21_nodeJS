const fs = require('fs');

//方法一
fs.unlink('./筆記_複製2.txt', err =>{
    if(err){
        console.log('刪除失敗');
    }
    console.log('刪除成功');
    return;
})

//方法二(node 14.4)
fs.rm('./被我改名的筆記_複製.txt',err => {
    if(err){
        console.log('刪除失敗');
        return;
    }
    console.log('刪除成功');
})