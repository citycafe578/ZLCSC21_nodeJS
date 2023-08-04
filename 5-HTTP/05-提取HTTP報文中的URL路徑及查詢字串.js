//導入http模組
const http = require('http');
//1.導入url模組
const url = require('url');

//創建服務對象
const server = http.createServer((request, response) => {
    //顯示url
    let res = url.parse(request.url, true);
    console.log(request.url);
    //路徑
    let pathname = res.pathname;
    console.log(pathname);
    //查詢字串
    let keyword = res.query.keyword;
    console.log(keyword);
});

//監聽端口,啟動服務
server.listen(9000,() =>{
    console.log('服務啟動');
})