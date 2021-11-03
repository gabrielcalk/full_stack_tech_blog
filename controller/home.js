const express = require('express')
const homeRouter = express.Router()
const {Post, User} = require('../models/associations')

/**
 * @function homeRouter.get
 * Render all the posts (home page)
 * Router: /
 */
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
// Render the page
        res.render('home', {
            posts,
            logged_in: req.session.logged_in 
        })
    } catch(err){
        res.status(500).json(err)
    }
});

/**
 * @exports homeRouter
 */
module.exports = homeRouter;
