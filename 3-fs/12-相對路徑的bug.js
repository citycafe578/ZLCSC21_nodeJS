const fs = require('fs');

//bug: 假設我在ZLCSC21_NODEJS資料夾執行(node .\day2_fs\12相對路徑的bug)，index2.html會生成在ZLCSC21_NODEJS而非day2_fs
//相對位置參照物為命令行的工作目錄
fs.writeFileSync('./index2.html','hi');

//解決方法:使用絕對路徑
//console.log(__dirname); //保存在所載完見的所在目錄之絕對路徑

fs.writeFileSync(__dirname + './index2.html','hi');