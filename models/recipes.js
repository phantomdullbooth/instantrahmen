const mongoose = require('mongoose'); // require mongoose package

const recipeSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  recipe: { type: String, required: true},
  user: String,
})

const Recipes = mongoose.model('Recipes', recipeSchema) // will be stored in 'recipes' collection

module.exports = Recipes;