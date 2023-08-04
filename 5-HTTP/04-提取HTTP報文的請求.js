//1.導入http模組
const http = require('http');

//2.創建服務對象
const server = http.createServer((request, response) => {
    response.end('hello http server');//設置響應內容
    //2-1設立變數
    let body = '';
    //2-2綁定事件
    request.on('data', chunk => {
        body += chunk;
    });

    //3.綁定end事件
    request.on('end', () => {
        console.log(body);
        //響應
        response.end('hello http');
    });

});

//3.監聽端口,啟動服務
server.listen(9000,() =>{
    console.log('服務啟動');
});

//這段不重要