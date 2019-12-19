// ========== DEPENDENCIES ========== //
// ========== DEPENDENCIES ========== //

const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session')
require('dotenv').config()
const app = express();
const db = mongoose.connection;


// ========== PORT [ HEROKU OR LOCAL] ========== //
// ========== PORT [ HEROKU OR LOCAL] ========== //

const PORT = process.env.PORT || 3000;


// ========== DB [ HEROKU & LOCAL] ========== //
// ========== DB [ HEROKU & LOCAL] ========== //

const MONGODB_URI = process.env.MONGODB_URI;

// FIX MONGOOSE DEPRECIATION WARNINGS [[ YELLOW ]]
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// CONNECTS TO MONGOOSE], { useUnifiedTopology: true } ADDED 2019 DEC 18
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// SUCCESS OR FAILURE
db.on('error', (error) => console.log(error.message + '. danger, will robinson. mongod is not running.'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


// ========== MIDDLEWARE ========== //
// ========== MIDDLEWARE ========== //

// PUBLIC FOLDER FOR STATIC ASSETS
app.use(express.static('public'));

// POPULATES req.body WITH FORM PARSED INFO; NO DATA? EMPTY OBJECT {}
app.use(express.urlencoded({ extended: false })); // { extended: false } DISALLOWS NESTED OBJECTS IN QUERY STRINGS
app.use(express.json()); // RETURNS MIDDLEWARE THAT ONLY PARSES JSON [ DEPENDENT-OPTIONAL ]


app.use(methodOverride('_method')); // METHOD OVERRIDE ALLOWS POST, PUT, DELETE FROM FORM
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))


// ========== ROUTES [ FROM CONTROLLERS/ ] ========== //
// ========== ROUTES [ FROM CONTROLLERS/ ] ========== //

const recipeController = require('./controllers/recipes.js');
app.use('/', recipeController);

const userController = require('./controllers/users.js')
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController);


// ========== LISTENER ========== //
// ========== LISTENER ========== //

app.listen(PORT, () => console.log(
  'Oven preheated to ' + PORT + ' degrees'
));