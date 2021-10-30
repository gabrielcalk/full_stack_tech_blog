const dashRouter = require('../../server')

dashRouter.get('/update', (req, res) =>{
    res.send('dashboard/update')
})