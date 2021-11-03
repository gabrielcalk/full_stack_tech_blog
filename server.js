const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./helper/utilits');

//Setting the connect-session with session (storage on dataBase the session)
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// PORT
const PORT = process.env.PORT || 3001;

// Requiring the Posts and User to sync the tables
const Post = require('./models/posts');
const User = require('./models/users');
const sequelize = require('./config/connection');

//Setting the session
const sess = {
    secret: process.env.DB_KEY,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

// Inform Express.js on which template engine to use
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Login Router: /login
const loginRouter = require('./controller/login');
app.use('/login', loginRouter);

// Post Router: /post
const postRouter = require('./controller/post');
app.use('/post', postRouter)

// Signup Router: /signup
const signUpRouter = require('./controller/signup');
app.use('/signup', signUpRouter)

// Dashboard Router: /dashboard
const dashboardRouter = require('./controller/dashboard/home')
app.use('/dashboard', dashboardRouter)

// Homer Router: /
const homeRouter = require('./controller/home')
app.use(homeRouter)

// 404 page
app.use((req, res) =>{
    res.status(404).send('Pagina nao encotrada')
})

// Creating the tables (sync) and listen to one port
sequelize.sync({ alter: false }).then(() => {
    app.listen(PORT, () => console.log(`Listen to: http://localhost:${PORT}`))
    console.log('Added Tables')
});



