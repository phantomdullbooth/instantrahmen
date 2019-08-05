const mongoose = require('mongoose'); // require mongoose package

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  recipe: String
})

const Recipes = mongoose.model('Recipes', recipeSchema) // will be stored in 'plants' collection

module.exports = Recipes;