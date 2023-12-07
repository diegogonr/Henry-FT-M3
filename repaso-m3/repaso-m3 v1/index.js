const server = require ('./src/app')
const {database} = require('./db')

database.sync({force:true}).then(       //se conecta el servidor despues de conectar a la base de datos
                                        // e coloca force true para que la bd se caiga y se levante
    ()=>{
        server.listen (3002, ()=>{
            console.log("server listening on port 3002")
        })
    }
)


