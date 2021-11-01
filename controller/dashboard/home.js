const express = require('express');
const dashboardRouter = express.Router();

dashboardRouter.get('/', (req, res) =>{
    res.render('dashboard')
});

dashboardRouter.get('/post', (req, res) => {
    res.send('dashboard - post')
});

dashboardRouter.get('/update', (req, res) =>{
    res.send('dasboard - update')
});

module.exports = dashboardRouter;