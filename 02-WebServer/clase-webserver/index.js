
const http = require ('http')

 //* como crear un servidor
http.
createServer(
    (request, response)=>{                                         //callback que recibe
        console.log('callback')
        // response.writeHead(200, {"Content-type":"text/plain"})  //para dar una respuesta
        // response.end("Hola, este es el primer servidor")        //respuesta del servidor

        //?Crear rutas
        console.log(request.url)                                    //me arroja el contenido despues de 3001

        if(request.url == '/users'){
            response.writeHead(200, {"Content-type":"text/plain"})  
            return response.end("Hola, ruta de usuarios")            
    
        }

        if(request.url == '/posts'){
            response.writeHead(200, {"Content-type":"text/plain"})  
            return response.end("Hola, ruta de posts")        
    
        }
        
        if(request.url == '/registro'){
            response.writeHead(200, {"Content-type":"application/json"})          //codigo JS
            const users = [
                {id:1 , name: 'diego'},
                {id:2 , name: 'hola'},
                {id:3 , name: 'chau'},
                {id:4 , name: 'pc'}

            ]

            return response.end(JSON.stringify(users))
    
        }

        else{
            response.writeHead(404, {"Content-type":"text/plain"})  
            return response.end("error no hay ruta")      
    
        }
})   
.listen(3001, "localhost")
