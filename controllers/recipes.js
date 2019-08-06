const express = require('express'); // requires express
const router = express.Router(); // defines router
const Recipes = require('../models/recipes.js'); // requires gifts file

// —————————— NEW /ADD-RECIPE –––––––––– //
router.get('/add-recipe', (req, res) => {
    res.render('new.ejs');
});
// ——————————–––––––––– //

// —————————— DELETE /:ID –––––––––– //
router.delete('/:id', (req, res) => {
    Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
        res.redirect('/')
    })
});

// —————————— EDIT /:ID/ADJUST-RECIPE –––––––––– //
router.get('/:id/edit-recipe', (req, res) => {
    Recipes.findById(req.params.id, (err, foundRecipe) => {
        res.render(
            'edit.ejs',
            {
                recipe: foundRecipe
            }
        );
    });
});

router.put('/:id', (req, res) => {
    Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
        res.redirect('/');
    })
});
// ——————————–––––––––– //

// —————————— INDEX / –––––––––– //
router.get('/', (req, res) => {
    Recipes.find({}, (err, allRecipes) => {
        res.render('index.ejs',{
            recipes: allRecipes
        });
    })
});
// ——————————–––––––––– //

// —————————— SHOW /:ID –––––––––– //
router.get('/:id', (req, res) => {
    Recipes.findById(req.params.id, (err, foundRecipe) => {
        res.render('show.ejs', {
            recipe: foundRecipe
        });
    });
});
// ——————————–––––––––– //


// ********** CREATE RECIPE ********** //
router.post('/', (req, res) => {
    Recipes.create(req.body, (err, createdRecipe) => {
        res.redirect('/');
    });
});
// ******************** //

module.exports = router;