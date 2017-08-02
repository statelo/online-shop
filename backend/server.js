const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const passport = require('passport');

const app = express();
const mongo = require('./database');

require('./passport');

// Set routers
const authentication = require('./routes/authentication');

// Set middlewares
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(favicon(path.join(__dirname, '../frontend/build/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({ secret: "Pushok", resave: false, saveUninitialized: false }))
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authentication)

app.listen(4001, () => {
	console.log("Server listening on port 4001");
})