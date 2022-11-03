const {DataTypes} = require('sequelize')
const Recipes = require('./recipes.models')

const db = require('../utils/database')

const Instructions = db.define('instructions', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    step:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    recipeId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references:{
            key: 'id',
            model: Recipes
        }
    }
})

module.exports = Instructions