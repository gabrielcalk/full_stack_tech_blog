const express = require('express');
const loginRouter = express.Router();
const User = require('../models/users')

/**
 * @function loginRouter.get
 * get the login page
 * Router: /login
 */
loginRouter.get('/', (req, res) =>{
    if(req.session.logged_in){
        res.redirect('/dashboard')
        return
    }
    res.render('login')
});

/**
 * @function loginRouter.post
 * Posting the informations and check if the email 
 * and password match with one that we have on the database
 * Router: /login
 */
loginRouter.post('/', async (req, res) =>{
    try{
        const email_info = await User.findOne({
            where:{email: req.body.answer.email}
        });
        if(!email_info){
            res.status(400).json({message: 'E-mail or Password Incorrect'});
            return
        } 
        const verifyPassword = email_info.checkPassword(req.body.answer.pass);
        if (!verifyPassword){
            res.status(400).json({message: 'Incorrect Email or Password!'})
        }
//Saving user_id, logged_in and post_id on the session
        req.session.save(() =>{
            req.session.user_id = email_info.id;
            req.session.logged_in = true;
            req.session.post_id = '0'
            res.status(200).json({message: 'You Are Logged In!'});
        })
    } catch(err){
        res.status(400).json(err);
    }
})

/**
 * @exports loginRouter
 */
module.exports = loginRouter;