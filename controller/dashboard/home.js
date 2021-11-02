const express = require('express');
const dashboardRouter = express.Router();
const User = require('../../models/users')
const Post = require('../../models/posts')

dashboardRouter.get('/', async (req, res) =>{
    try{
        if(!req.session.logged_in){
            res.redirect('/login')
            return
        }
        const user_posts = await Post.findAll({
            where:{
                user_id: req.session.user_id,
            }
        });

        const posts = user_posts.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            layout:false,
            posts,
            logged_in: true
        });
    }catch(err){
        res.status(500).json({message:'Erro trying ot get the dashboard'})
    }
});

dashboardRouter.post('/', async(req, res) =>{
    if (req.session.logged_in) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
})

dashboardRouter.get('/post', (req, res) => {
    res.render('dashboard-post')
});

dashboardRouter.post('/post', async (req, res) => {
    try{
        const post_data = await Post.create({
            ...req.body.answer,
            user_id: req.session.user_id
        });
        res.status(200).json(post_data);
    }catch(err){
        res.status(500).json({message: 'error: could not created the post'})
    }
});

post_array = []
dashboardRouter.post('/update/id', async (req, res) =>{
    post_array.push(req.body.id_post)
    if(post_array.length >= 0){
        res.status(200).json({message: 'success'})
    }
});

dashboardRouter.get('/update', async (req, res) =>{
    const post_input = await Post.findOne({
        where:{
            id: post_array[0]
        }
    })
    
    const post_input_data = post_input.get({plain:true})

    res.render('update', {
        post_input_data
    })
});

dashboardRouter.put('/update', async (req, res) => {
    try{
        const post_update = await Post.update({
            title: req.body.title,
            description: req.body.description,
            where:{
                id: post_array[0]
            }
        })
        res.status(200).send('sucess')
        post_array = []
    }catch(err){
        
    }   
});

module.exports = dashboardRouter;