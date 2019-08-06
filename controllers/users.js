
// CONTROLLERS
const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

// GET FORM
users.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

// SUBMIT FORM
users.post('/', (req, res) => {
  // HASH PASSWORD
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
    } else {
      console.log(createdUser)
      res.redirect('/')
    }
  })
})

module.exports = users