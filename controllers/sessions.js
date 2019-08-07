const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

// form for new session/log in
sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs')
})

// UPON SUBMITTING LOGIN FORM
sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => { // FIND USERNAME
    // Database error
    if (err) {
      console.log(err)
      res.send('*hiccup* there\'s a problem with the database')
    } else if (!foundUser){ // if found user is undefined/null not found etc
      res.send('<a  href="/">Sorry, no user found </a>')
    } else { // user is found yay!
      // DO PASSWORDS MATCH?
      if(bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser // EVERYTHING OKAY — ADD SESSION AND...
        res.redirect('/') // REDIRECT TO HOMEPAGE AFTER LOGIN
      } else {
        res.send('<a href="/"> password does not match </a>') // IF PASSWORDS DO NOT MATCH, SEND THIS
      }
    }
  })
})

sessions.delete('/app', (req, res) => {
  req.session.destroy(()=> {
    res.redirect('/')
  })
})

module.exports = sessions