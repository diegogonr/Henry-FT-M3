const express = require ('express');
const server = express();                                         //para ejecutarlo
const morgan = require ('morgan')                                 //middleworks: ionformacion de la request

const usersRouter = require('./routes/usersRoutes')
const posteosRouter = require('./routes/posteosRoutes')

server.use(express.json())                                        // para recibir cosas en formato json
server.use(morgan('dev'))                                         //ver los datos que me llegan, dev: formato de rpta

server.use('/users', usersRouter); 
server.use('/posteos', posteosRouter);



server.get ('/users', (req, res) => {
    res.send('holi')
})

module.exports = server;


