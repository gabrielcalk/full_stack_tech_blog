const express = require('express');
const loginRouter = express.Router();
const User = require('../models/users')

loginRouter.get('/', (req, res) =>{
    res.render('login')
    // res.write(console.log('hey'))
});

loginRouter.post('/', async (req, res) =>{
    if (req.body.user && req.body.email && req.body.password){
        try{
            const creat_user = await User.create({
            user: req.body.user,
            email: req.body.email,
            password: req.body.password
            });
        } catch(err){
            res.status(500).send(err);
        }
    } else{
        res.write(console.log('hey'))
    }
})

module.exports = loginRouter;