// ========== CONSTANTS ========== //
// ========== CONSTANTS ========== //

const express = require('express');
const router = express.Router();
const session = require('express-session')
const Recipes = require('../models/recipes.js');

// RENDER ADD RECIPE PAGE
router.get('/app/add-recipe', (req, res) => {
    res.render('app/new.ejs', {
        currentUser: req.session.currentUser
    });
});


// DELETE RECIPE
router.delete('/:id', (req, res) => {
    Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
        res.redirect('/app')
    })
});

// EDIT RECIPE
router.get('/:id/edit-recipe', (req, res) => {
    Recipes.findById(req.params.id, (err, foundRecipe) => {
        res.render(
            'app/edit.ejs',
            {
                recipe: foundRecipe
            }
        );
    });
});

router.put('/:id', (req, res) => {
    Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/app');
    })
});


// INDEX
router.get('/', (req, res) => {
    Recipes.find({}, (err, allRecipes) => {
        res.render('index.ejs', {
            recipes: allRecipes,
            currentUser: req.session.currentUser
        })
    })
})


router.get('/app', (req, res) => {
    if (req.session.currentUser) {
        Recipes.find({}, (err, allRecipes) => {
            res.render('app/index.ejs',{
                recipes: allRecipes,
                currentUser: req.session.currentUser
            });
        })
    } else {
        res.redirect('/sessions/new')
    }
})

// SHOW RECIPE
router.get('/:id', (req, res) => {
    Recipes.findById(req.params.id, (err, foundRecipe) => {
        res.render('app/show.ejs', {
            recipe: foundRecipe
        });
    });
});


// CREATE RECIPE
router.post('/app', (req, res) => {
    Recipes.create(req.body, (err, createdRecipe) => {
        res.redirect('/app');
    });
});


// ========== EXPORT ========== //
// ========== EXPORT ========== //

module.exports = router;