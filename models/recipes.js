const express = require('express'); // requires express
const router = express.Router(); // defines router
const Recipes = require('../models/plants.js'); // requires gifts file
const ingredients = require('../models/ingredients.js');

// router.get('/seed', (req, res) => {
//     Plants.create(seedPlants, (err, data) => {
//         res.redirect('/')
//     });
// });