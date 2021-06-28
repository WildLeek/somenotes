const express = require('express');
const session = require('express-session');
const path = require('path');

//Session storage
// const redis = require('redis');
// const redisStore = require('connect-redis')(session);
// const client = redis.createClient();

const router = express.Router();

const app = express();

//View engine and front end
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('main');
});

app.listen(process.env.PORT||8080,console.log('App running'));