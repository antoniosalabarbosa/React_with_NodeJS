// Teste

const Express = require('express');
const express = Express();

express.get('/', (req, res, next)=>{
    res.send('Ok');
    next();
});

express.listen(3000);