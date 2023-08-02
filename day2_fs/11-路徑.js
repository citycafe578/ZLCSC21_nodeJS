const fs = require('fs');

//相對路徑
// fs.writeFileSync('./index.html', 'what?');
// fs.writeFileSync('index.html', 'what?');
// fs.writeFileSync('..index.html', 'what?');

//絕對路徑 (不能寫在系統盤)
fs.writeFileSync('D:/index.html', 'what?');