const express = require('express');
const signUpRouter = express.Router();
const User = require('../models/users')

signUpRouter.get('/', (req, res) =>{
    res.render('signup')
});

signUpRouter.post('/', async (req, res) =>{
    try{
        console.log(req.body)
        const creat_user = await User.create({
            username: req.body.answer_signup.username,
            email: req.body.answer_signup.email,
            password: req.body.answer_signup.password
        });
        
        res.status(200).json(creat_user)
    } catch(err){
        res.status(500).send(err);
    }
})

module.exports = signUpRouter;