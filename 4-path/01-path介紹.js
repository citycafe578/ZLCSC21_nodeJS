const fs = require('fs');
const path = require('path');

//resolve是單純把指定的路徑連結在一起，會把最後一個帶有 '/' 的路徑當作根目錄，類似 "cd" 的效果
//了解resolve，其他看看就好
console.log(path.resolve(__dirname, './index.html'));

//sep分割符
console.log(path.sep);

//parse 解析路徑
//__filename保存這這個文件的絕對路徑
console.log(__filename);
let str = ' '//輸入路徑
//上面路徑至藉由console.log(__filename)獲得，並將單個反斜線改為二個
console.log(path.parse(str));

//basename了解文件名稱
console.log(path.basename(str));

//dirname了解資料夾名稱
console.log(path.dirname(str));

//extname了解文件屬性
console.log(path.extname(str));