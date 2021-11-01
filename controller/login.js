const express = require('express');
const loginRouter = express.Router();
const User = require('../models/users')

loginRouter.get('/', (req, res) =>{
    res.render('login')
});

loginRouter.post('/', async (req, res) =>{
    try{
        const email_info = await User.findOne({
            where:{email: req.body.answer.email}
        });

        if(!email_info){
            res.status(400).json({message: 'E-mail or Password Incorrect'});
            return
        } 
        res.status(200).json({message: 'login'});
    } catch(err){
        res.status(400).json(err);
    }
})

module.exports = loginRouter;