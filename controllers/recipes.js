const express = require('express'); // requires express
const router = express.Router(); // defines router
const session = require('express-session')
const Recipes = require('../models/recipes.js'); // requires gifts file

// —————————— NEW /ADD-RECIPE –––––––––– //
router.get('/app/add-recipe', (req, res) => {
    res.render('app/new.ejs');
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
// ——————————–––––––––– //

// —————————— INDEX / –––––––––– //
router.get('/', (req, res) => {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
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

// —————————— SHOW /:ID –––––––––– //
router.get('/:id', (req, res) => {
    Recipes.findById(req.params.id, (err, foundRecipe) => {
        res.render('app/show.ejs', {
            recipe: foundRecipe
        });
    });
});
// ——————————–––––––––– //


// ********** CREATE RECIPE ********** //
router.post('/app', (req, res) => {
    Recipes.create(req.body, (err, createdRecipe) => {
        res.redirect('/');
    });
});
// ******************** //

module.exports = router;