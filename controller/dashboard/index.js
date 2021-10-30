const router = require('express').Router();

const dashRoutes = require('./home');

router.use('/', dashRoutes);

module.exports = router;