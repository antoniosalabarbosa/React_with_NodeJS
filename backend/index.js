const Express = require('express');
const cors = require('cors');
const path = require('path');

const express = Express();

express.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    express.use(cors());
    next();
});

express.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/modules/test.json'));
});

express.listen(3000);