const fs = require('fs');

//創建文件夾
fs.mkdir('./新增文件夾', err => {
    if(err){
        console.log('創建失敗');
        return;
    }
    console.log('創建成功');
})

// //遞規創建(/.a/b/c)
fs.mkdir('./a/b/c', {recursive: true} , err => {
    if(err){
        console.log('創建失敗');
        return;
    }
    console.log('創建成功');
})

//讀取資料夾
fs.readdir('./', (err,data) =>{
    if(err){
        console.log('讀取失敗');
        return;
    }
    console.log(data);
});

//刪除資料夾
fs.rmdir('./新增文件夾',err => {
    if(err){
        console.log('刪除失敗');
        return;
    }
    console.log('刪除成功');
})

//遞龜刪除(不推薦，將要移除)
fs.rmdir('./a',{recursive: true},err => {
    if(err){
        console.log('刪除失敗');
        return;
    }
    console.log('刪除成功');
})

//遞龜刪除(推薦)
fs.rm('./a',{recursive: true},err => {
    if(err){
        console.log('刪除失敗');
        return;
    }
    console.log('刪除成功');
})