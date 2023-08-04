//1.導入http模組
const http = require('http');

//2.創建服務對象
const server = http.createServer((request, require) => {
    response.setHeader('content-type', 'text/html;charset=utf-8');//設置輸出文字格式
    response.end('hello http server');//設置響應內容
    response.end('安安');
});

//3.監聽端口,啟動服務
server.listen(9000,() =>{
    console.log('服務啟動');
})