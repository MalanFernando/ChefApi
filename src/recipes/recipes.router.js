const router = require('express').Router()
const passport = require('passport')

const recipeServices = require('./recipes.services')
require('../middlewares/auth.middleware')(passport)



//? /recipes 
//? /recipes/:recipe_id

router.route('/')
    .get(recipeServices.getAllRecipes)
    .post(
        passport.authenticate('jwt', {session: false}),
        recipeServices.createRecipe
    )

router.route('/:recipe_id')
    .get(recipeServices.getRecipeById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        recipeServices.patchRecipe
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        recipeServices.deleteRecipe
    )

module.exports = router