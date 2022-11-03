const Users = require('./users.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Recipes = require('./recipes.models')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')


const initModels = () => {
    //* 1:M -> Users - Recipes 
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    //* 1:M -> Users - UsersRecipes
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    //* 1:M -> Recipes - UsersRecipes
    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    //* 1:M -> Categories - Recipes
    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    //* 1:M -> Types - Ingredients
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Recipes)

    //* 1:M -> Recipes - RecipesIngredients
    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    //* 1:M -> Ingredients - RecipesIngredients
    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)

    //* 1:M -> Users - UsersIngredients
    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    //* 1:M -> Ingredients - UsersIngredients
    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

    //* 1:M -> Recipes - Instructions
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)
}


module.exports = initModels