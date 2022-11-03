const uuid = require('uuid')

const Instructions = require('../models/instructions.models')

const getAllInstructions = async() => {
    const data = await Instructions.findAll()
    return data
}

const getInstructionById = async (id) => {
    const data = await Instructions.findOne({
        where: {
            id
        }
    })
    return data
}

const createInstruction = async (data) => {
    const response = await Instructions.create({
        id: uuid.v4(),
        description: data.description,
        step: data.step,
        recipeId: data.recipeId
    })
    return response
}

const updateInstruction = async (id, data) => {
    const response = await Instructions.update(data, {
        where: {
            id
        }
    })
    return response
}

const deleteInstruction = async (id) => {
    const data = await Instructions.destroy({
        where: {
            id
        }
    })
    return data
}


module.exports = {
    createInstruction,
    getAllInstructions,
    getInstructionById,
    updateInstruction,
    deleteInstruction
}