
//*******SERVIDOR CON HTTP */
// const http = require('http')

// http.createServer((req, res)=>{

//     if (req.url == '/'){
//         res.writeHead (200, {"Content-type": "text/plain"})
//         .end ('hola, soy el servidor con http')
//     }

// }

// )
// .listen(3001, 'localhost')

//*******SERVIDOR CON EXPRESS */

const express = require ('express');
const server = express();                                         //para ejecutarlo

const morgan = require ('morgan')                                 //middleworks: ionformacion de la request

const usersRoutes= require ('./routes/usersRoutes')               //importar rutas de otro archivo
const posteosRoutes= require ('./routes/posteosRoutes')

server.use(express.json())                                        // para recibir cosas en formato json
server.use(morgan('dev'))                                         //ver los datos que me llegan, dev: formato de rpta
server.use ('/user', usersRoutes)                                 // todas las rutas comenzaran por '/user', info de rutas.
server.use ('/posteo', posteosRoutes)                                 


//??????????????EJEMPLOS BASICOS
server.get('/', (req, res) => {                                   //ruta, callback (req,res)
    res.send ('esta ruta fue creada con expreess')                //respuesta al aservidor
})

server.get('/users', (req, res) => {                              //ruta, callback (req,res)
    res.send ('esta ruta es para usuarios')
})

server.get('/ab/:id', (req, res) => {                              //recibo un id
    const {id} = req.params

    res.send ({id})                                                 // estado 200 por defecto
})



server.listen (3001, ()=>{                                        //puerto, callback
    console.log("server listen on port 3001")
})







