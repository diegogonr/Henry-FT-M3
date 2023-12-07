
const charactersRouter = require('express').Router();
const {getCharacters, getCharactersV2}= require('../../controllers/charactersController')

charactersRouter.get('/', async (req, res) =>{ //controlador asyncronico por eso el async
    try {
        const allCharacters = await getCharactersV2()
        return res.json(allCharacters)
    } catch (error) {
        
    }
})

module.exports = charactersRouter;