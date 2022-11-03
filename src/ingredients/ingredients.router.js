const router = require('express').Router()
const passport = require('passport')
const adminMiddleware = require('../middlewares/role.middleware')

const ingredientServices = require('./ingredients.services')
require('../middlewares/auth.middleware')(passport)

//? /ingredients 
//? /ingredients/:ingredient_id

router.route('/')
    .get(ingredientServices.getAllIngredients)
    .post(
        passport.authenticate('jwt', {session: false}),
        adminMiddleware,
        ingredientServices.postIngredient
    )

router.route('/:ingredient_id')
    .get(ingredientServices.getIngredientById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        adminMiddleware,
        ingredientServices.patchIngredient
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminMiddleware,
        ingredientServices.deleteIngredient
    )

    router.post('/:ingredient_id/add_to_user', 
    passport.authenticate('jwt', {session: false}),
    ingredientServices.postIngredientToUser
)

module.exports = router