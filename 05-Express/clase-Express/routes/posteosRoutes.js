
const express = require ('express')
const routerPosteos= express.Router();

//?????????? METODO POST : recibe objetos
const users =[]                                             //simualcion de la DB
let id=0;

routerPosteos.post ('/',(req, res) => {                  //recibe informacion en formato json. Ejm: formularios            
    console.log(req.body)
    const {name} = req.body
    const newuser = {
        id: ++id,
        name
    }

    users.push(newuser)
    console.log(users)
    res.json(users)

})
module.exports = routerPosteos;