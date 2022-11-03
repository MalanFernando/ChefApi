const instructionControllers = require('./instructions.controller')

const getAllInstructions = (req, res) => {
    instructionControllers.getAllInstructions()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getInstructionById = (req, res) => {
    const id = req.params.instruction_id
    instructionControllers.getInstructionById(id)
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

const postInstruction = (req, res) => {
    const {description, step, recipeId} = req.body

    if(description && step && recipeId){
        instructionControllers.createInstruction({
            description, step, recipeId
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
                description: 'string',
                step: 'number',
                recipeId: 'uuid'
            }
        })
    }
}


const patchInstruction = (req, res) => {
    const { description, step, recipeId } = req.body
    const id = req.params.instruction_id
    instructionControllers.updateInstruction(id, {description, step, recipeId})
        .then(data => {
            if(data[0]){
                res.status(200).json({message: `Instruction with ID: ${id} edited succesfully`})
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })  
}

const deleteInstruction = (req, res) => {
    const id = req.params.instruction_id

    instructionControllers.deleteInstruction(id)
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
    postInstruction,
    getAllInstructions,
    getInstructionById,
    patchInstruction,
    deleteInstruction
}