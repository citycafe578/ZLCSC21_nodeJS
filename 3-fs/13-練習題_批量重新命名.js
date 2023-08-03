const fs = require('fs');

const file = fs.readdirSync('../3-fs');
// console.log(file);

file.forEach(item =>{
    //1.拆分文件名稱
    let data = item.split('-');
    console.log(data);
    let[num, name] = data;
    if(Number(num) < 10){
        num = '0' + num;
    }
    //重新命名
    let newname = num + '-' + name;
    fs.renameSync(`../3-fs/${item}`, `../3-fs/${newname}`);
    
})