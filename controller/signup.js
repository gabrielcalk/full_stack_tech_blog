const express = require('express');
const signUpRouter = express.Router();
const User = require('../models/users')

/**
 * @function signUpRouter.get
 * render the signup page
 * Router: /signup
 */
signUpRouter.get('/', (req, res) =>{
    res.render('signup')
});

/**
 * @function signUpRouter.post
 * post the user informations on the date base
 * and loggin him/her
 * Router: /signup
 */
signUpRouter.post('/', async (req, res) =>{
    try{
        console.log(req.body)
        const creat_user = await User.create({
            username: req.body.answer_signup.username,
            email: req.body.answer_signup.email,
            password: req.body.answer_signup.password
        });
//Saving user_id, logged_in and post_id on the session
        req.session.save(() =>{
            req.session.user_id = creat_user.id;
            req.session.logged_in = true;
            res.status(200).json(creat_user)
        });
    } catch(err){
        res.status(500).send(err);
    }
})

/**
 * @exports signUpRouter
 */
module.exports = signUpRouter;