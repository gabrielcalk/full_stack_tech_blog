const express = require('express')
const homeRouter = express.Router()
const Post = require('../models/posts')
const User = require('../models/users')

homeRouter.get('/', async (req, res) =>{
    try{
        const user_data = await User.findAll({
            attributes: {
                exclude: ['email', 'password'],
            }
        });
        const post_data = await Post.findAll({
            attributes: {
                order: [['updated_at', 'DESC']]
            }
        });

        const posts = post_data.map((post) => post.get({plain:true}));

        res.render('home', {
            posts
        })
    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = homeRouter;
