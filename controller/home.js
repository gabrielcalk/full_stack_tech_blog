const express = require('express')
const homeRouter = express.Router()
const {Post, User} = require('../models/associations')

homeRouter.get('/', async (req, res) =>{
    try{
        const post_data = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
            ],
        });

        const posts = post_data.map((post) => post.get({plain:true}));

        res.render('home', {
            posts,
            logged_in: req.session.logged_in 
        })
    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = homeRouter;
