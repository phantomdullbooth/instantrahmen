// ========== CONSTANTS ========== //
// ========== CONSTANTS ========== //

const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

// ========== SESSIONS ========== //
// ========== SESSIONS ========== //

// USER LOG IN (NEW SESSION)
sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
})

// AFTER USER SUBMITS FORM
sessions.post('/', (req, res) => {
  // FIND THE USERNAME
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    // IF DATABASE ISSUE
    if (err) {
      console.log(err)
      res.send('*hiccup* there\'s a problem with the database')
    // IF USER NOT FOUND
    } else if (!foundUser) { // if found user is undefined/null not found etc
      res.send('<a href="/">Sorry, no user found </a>')
    } else {
      // THEN, IF PASSWORD FOUND
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/')
        // ELSE, IF PASSWORD NOT MATCH
      } else {
        res.send('<a href="/">Sorry, that password isn\'t right.</a>')
      }
    }
  })
})

// USER LOG OUT (DELETE SESSION)
sessions.delete('/app', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

// ========== EXPORT ========== //
// ========== EXPORT ========== //

module.exports = sessions