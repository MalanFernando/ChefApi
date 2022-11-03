const uuid = require('uuid')

const RecipesIngredients = require('../../models/recipes_ingredients.models')


RecipesIngredients.bulkCreate([
    {
        id: uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        ingredientId: 'cdea51a0-b247-408d-97c5-c0a4564c6bf8',
        amount: '1 taza'
    },
    {
        id: uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        ingredientId: '5042ee65-a867-41a7-96af-b128c66fde0b',
        amount: '2 1/2 tazas'
    },
    {
        id: uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        ingredientId: '0e2a6567-7e93-46ea-94ca-59be5130863d',
        amount: '500 gramos'
    },
    {
        id: uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        ingredientId: 'c79a9605-a285-4088-b577-caa059beae90',
        amount: '1/2 taza'
    },
    {
        id: uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        ingredientId: 'fbade855-a35f-4384-83c2-86d3253815e8',
        amount: '450 gramos'
    },
    {
        id: uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        ingredientId: '98f0c900-e9f0-435b-87b1-3f4220eddff1',
        amount: '1 pieza'
    },
    {
        id: uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        ingredientId: '92867f4c-e9e3-453f-8b2d-1ae7b39f47f0',
        amount: '650 gramos'
    },
    {
        id: uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        ingredientId: 'ba4195dd-fa91-4224-ba1e-f35144d398ec',
        amount: 'Al gusto'
    },
    {
        id: uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        ingredientId: '712780a6-03c0-4e80-b3e4-b6592d4c8f3f',
        amount: '12 laminas'
    },
    {
        id: uuid.v4(),
        recipeId: '8efe80b6-ec2b-4133-bfca-3839e7c741df',
        ingredientId: '227cede3-8597-41a8-85d6-7f1a76336f84',
        amount: '1'
    },
    {
        id: uuid.v4(),
        recipeId: '8efe80b6-ec2b-4133-bfca-3839e7c741df',
        ingredientId: '29b66e63-d710-434c-a2b7-b464e9a4fa9b',
        amount: 'al gusto'
    },
    {
        id: uuid.v4(),
        recipeId: '8efe80b6-ec2b-4133-bfca-3839e7c741df',
        ingredientId: '8d83b98a-105d-4b41-9e30-e70b90594af4',
        amount: '1 1/2 onzas'
    },
    {
        id: uuid.v4(),
        recipeId: '52472541-787f-4a64-804d-011a6e0dd44b',
        ingredientId: 'bdda3cab-4af3-47a8-9300-3b9389baa54a',
        amount: '1 lata'
    },
    {
        id: uuid.v4(),
        recipeId: '52472541-787f-4a64-804d-011a6e0dd44b',
        ingredientId: '6165f28c-2770-4e42-9db9-259223725ab7',
        amount: '1 1/2 onzas'
    },
])