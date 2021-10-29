const express = require('express');
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize.sync({ force: false}).then((result) =>{
    app.listen(PORT, () => console.log(`Listen to: http://localhost:${PORT}`))
});