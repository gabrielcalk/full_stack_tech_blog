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
        const user_post = await User.findByPk(req.session.user_id)
 
        res.render('dashboard', {layout:false})
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
    res.send('dashboard - post')
});

dashboardRouter.get('/update', (req, res) =>{
    res.send('dasboard - update')
});

module.exports = dashboardRouter;