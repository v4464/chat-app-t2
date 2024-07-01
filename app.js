const path = require('path');
const express = require('express');
const sequelize = require('./util/database');
const User = require('./models/users');
const userRoutes = require('./routes/user');

var cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup', 'signup.html'));
});

sequelize
.sync()
.then(() => {
    app.listen(7000);
})
.catch(err => {
    console.log(err);
});