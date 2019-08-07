const mongoose = require('mongoose'); // require mongoose package

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  line_1: { type: String, required: true},
  line_2: String,
  line_3: String,
  line_4: String,
  line_5: String,
  line_6: String,
})

const Recipes = mongoose.model('Recipes', recipeSchema) // will be stored in 'plants' collection

module.exports = Recipes;