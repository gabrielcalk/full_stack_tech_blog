const express = require('express');
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;




(async () => {
    const database = require('./config/connection');
    const Post = require('./models/posts')
    const User = require('./models/users')
    await database.sync();
    app.listen(PORT, () => console.log(`Listen to: http://localhost:${PORT}`))
})();