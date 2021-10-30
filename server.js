const express = require('express');


const app = express();

// PORT
const PORT = process.env.PORT || 3001;

// Requiring the Posts and User to sync the tables
const Post = require('./models/posts');
const User = require('./models/users');
const sequelize = require('./config/connection');


// Login Router: /login
const loginRouter = require('./controller/login');
app.use('/login', loginRouter);

// Post Router: /post
const postRouter = require('./controller/post');
app.use('/post', postRouter)

// Signup Router: /signup
const signUpRouter = require('./controller/signup');
app.use('/signup', signUpRouter)



sequelize.sync({alter: false}).then(() => {
    app.listen(PORT, () => console.log(`Listen to: http://localhost:${PORT}`))
    console.log('Added Tables')
});



