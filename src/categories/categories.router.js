const router = require('express').Router()

const categoryServices = require('./categories.services')

//? / 
//? /:id


router.route('/')
    .get(categoryServices.getAllCategories)
    .post(categoryServices.postCategory) //TODO hacerla protegida por administrador

router.route('/:id')
    .get(categoryServices.getCategoryById)
    .delete(categoryServices.deleteCategory) //TODO hacerla protegida por administrador

module.exports = router