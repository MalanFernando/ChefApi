const recipeControllers = require('./recipes.controllers')

const getAllRecipes = (req, res) => {
    recipeControllers.getAllRecipes()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}
//? /api/v1/recipe/2/ingredients/8
//? router.get('/api/v1/recipe/:recipe_id/ingredients/:ingredient_id')
const getRecipeById = (req, res) => {
    const id = req.params.recipe_id 
    recipeControllers.getRecipeById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const createRecipe = (req, res) => {
    const userId = req.user.id
    const {title, description, urlImg, time, portions, categoryId, origin} = req.body

    if(title && description && time && portions && categoryId){
        recipeControllers.createRecipe({
            title, description, urlImg, time, portions, categoryId, origin, userId
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'string',
                description: 'string',
                time: 'number',
                portions: 'number',
                categoryId: 'number'
            }
        })
    }
}

const patchRecipe = (req, res) => {
    const { title, description, urlImg, time, portions, categoryId, origin } = req.body
    const id = req.params.recipe_id
    recipeControllers.updateRecipe(id, {title, description, urlImg, time, portions, categoryId, origin})
        .then(data => {
            if(data[0]){
                res.status(200).json({message: `Recipe with ID: ${id} edited succesfully`})
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })  
}

const deleteRecipe = (req, res) => {
    const id = req.params.recipe_id

    recipeControllers.deleteRecipe(id)
        .then(data => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe, 
    patchRecipe,
    deleteRecipe
}