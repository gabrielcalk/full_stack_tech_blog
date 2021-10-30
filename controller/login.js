const express = require('express');
const loginRouter = express.Router();

loginRouter.get('/', (req, res) =>{
    res.send('login page')
});

module.exports = loginRouter;