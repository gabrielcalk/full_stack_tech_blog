const express = require('express');
const signUpRouter = express.Router();
const User = require('../models/users')

signUpRouter.get('/', (req, res) =>{
    res.render('signup')
});

signUpRouter.post('/', async (req, res) =>{
    try{
        const creat_user = await User.create({
            username: req.body.user,
            email: req.body.email,
            password: req.body.password
        });
        res.json(creat_user)
    } catch(err){
        res.status(500).send(err);
    }
})

module.exports = signUpRouter;