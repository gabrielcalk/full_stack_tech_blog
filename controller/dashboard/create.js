const dashRouter = require('./home')

dashRouter.get('/create', (req, res) =>{
    res.send('dashboard/create')
})