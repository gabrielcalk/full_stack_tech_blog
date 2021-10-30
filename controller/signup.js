const express = require('express');
const signUpRouter = express.Router();

signUpRouter.get('/', (req, res) =>{
    res.send('signUp Page')
});

module.exports = signUpRouter;