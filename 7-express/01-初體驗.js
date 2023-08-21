const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.end('hello express');
})

app.listen(8080, () => {
    console.log('服務啟動，端口:8080');
})