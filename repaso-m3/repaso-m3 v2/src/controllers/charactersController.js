const axios = require('axios');
const {API_RICK} = process.env;  //process hace ref al entorno global

let characters = []
let i=1;

const getCharacters = async ()=> {
    try {
        while (i<3){
            const {data} = await axios (`${API_RICK}?page=${i}`);
            console.log(data)
            characters = [...characters, ...data.results]
            
            i++
    
        }
        return characters
    } catch (error) {
        
    }

}

let charactersPromise = []
let j=1
const getCharactersV2 = async ()=> {
    try {
        while (j<3){
            let response = await axios (`${API_RICK}?page=${i}`);
            charactersPromise.push(response);       //push de la promise [<promise>, <promise>]
            j++
        }

        charactersPromise = (await Promise.all(charactersPromise)) //resuelve promesas juntas
        // repta de charactersPromise= [{}, {}]
        .map (response =>
                response.data.results.map (character =>{
                    return ({
                        id: character.id,
                        name: character.name,
                        status: character.status,
                        origin: character.origin.name
                    })
                }))   
        // [[personajes pag 2], [personajes pag 2]]

        let allCharacters = []
        charactersPromise.map (array => {allCharacters = allCharacters.concat(array)})

        return allCharacters
    } catch (error) {
        
    }

}


module.exports = {
    getCharacters,
    getCharactersV2
}