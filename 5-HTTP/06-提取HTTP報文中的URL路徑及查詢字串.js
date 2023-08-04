//1.導入http模組
const http = require('http');

//2.創建服務對象
const server = http.createServer((request, response) => {
    let url = new URL(request.url, 'http://127.0.0.1:9000');
    console.log(url);
    console.log(url.pathname);
    response.end('url new');
    //輸出keyword查詢字串
    console.log(url.searchParams.get(keyword));
});

//3.監聽端口,啟動服務
server.listen(9000,() =>{
    console.log('服務啟動');
})