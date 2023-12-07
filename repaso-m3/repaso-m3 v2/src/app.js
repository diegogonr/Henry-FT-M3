
require('dotenv').config()

//* DEPENDENCIAS
const express = require('express');
const morgan= require('morgan');
const server = express();

//** RUTAS */
const charactersRoutes = require('./routes/charactersRoutes/getCharacters')


//* MIDDLEWARES
server.use(express.json());
server.use (morgan ('dev'))


//* MODULARIZACION DE RUTAS
server.use ('/characters', charactersRoutes)



//**PRUEBAS */
server.get('/', (req, res) => {
    res.send ("todo ok")
})


module.exports = server;
