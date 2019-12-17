// ========== CONSTANTS ========== //
// ========== CONSTANTS ========== //

const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')


// ========== SESSIONS ========== //
// ========== SESSIONS ========== //

// USER SIGN UP
users.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

// AFTER USER SUBMITS FORM
users.post('/', (req, res) => {
  // HASH PASSWORD
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (error, createdUser) => {
    if (error) {
      console.log(error)
      // IF SUCCESS, AUTOMATIC LOG IN AND REDIRECT
    } else {
      console.log(createdUser)
      req.session.currentUser = createdUser
      res.redirect('/')
    }
  })
})


// ========== EXPORT ========== //
// ========== EXPORT ========== //

module.exports = users