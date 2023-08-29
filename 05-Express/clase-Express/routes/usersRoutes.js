
//*******MODULARIZAR RUTAS */

const express = require ('express')
const routerUsers = express.Router()


//?????????? QUERY

routerUsers.get('/client', (req, res) => {                              //ruta, callback (req,res)
    const {name} = req.query                                            //http://localhost:3001/user/client?name=diego

    if (name){
       return res.send (`se envio este parametro ${name} envio a ese cliente`)
    }
    return res.send(`mando a todos los usuarios`)
})


//?????????? RECIBIR DATA POR URL

routerUsers.get('/:id', (req, res) => {                              //recibo un id
    const {id} = req.params

    if (id ==23){
        const infoUser = {
            name: "diego",
            apellido: "gonzales"
        }
        return res.json(infoUser)                 //res.send funciona igual, pero lo correcto e sponer json
    }

    res.status(404).send('hubo un error')

})


module.exports = routerUsers;