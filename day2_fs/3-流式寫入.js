//適合更改率較高的通訊(不斷開連接)
//方便 、效率高
//導入fs
const fs = require('fs');

//創建對象
const i = fs.createWriteStream('./流式寫入.txt');

i.write('這是第一段'+'\r\n');
i.write('這是第二段'+'\r\n');
i.write('這是第三段'+'\r\n');
i.write('這是第四段'+'\r\n');

//關閉通道(可選)
i.close;

