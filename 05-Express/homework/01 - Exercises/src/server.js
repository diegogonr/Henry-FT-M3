const express = require("express");

let publications = [
    {
        "id": "1",
        "author": "1",
        "title":  "4",
        "contents": "9"
    },
    {
        "id": "2",
        "author": "1",
        "title":  "4",
        "contents": "9"
    },
    {
        "id": "3",
        "author": "4",
        "title":  "4",
        "contents": "9"
    }
];

const server = express();

let id= 0;
server.use(express.json());


server.post('/posts', (req, res) => {                                   //ruta, callback (req,res)

    if (
        req.body.author &&
        req.body.title  &&
        req.body.contents
    )
    {
        const newPost= {
            id: ++id,
            author: req.body.author,
            title:  req.body.title,
            contents: req.body.contents,
        }
        publications.push(newPost)
        console.log(publications)
        res.status(200).json(newPost)
    }
    else 
    res.status(400).json({error: "No se recibieron los parámetros necesarios para crear la publicación"});

})

server.get('/posts', (req, res) => {                              //ruta, callback (req,res)
    console.log(publications)
    const {author, title} = req.query
    const coincidencias= publications.filter((publication)=>{
        return publication.author === author && publication.title === title
    })

    coincidencias.length>0? res.status(200).json(coincidencias) : 
    res.status(400).json({error:  "No existe ninguna publicación con dicho título y autor indicado"});

})

server.get ('/posts/:author', (req, res)=>{
    const {author} = req.params
    console.log(publications)
    console.log(author)

    const coincidencias = publications.filter((publication)=>{
        return publication.author == author;
    })

    coincidencias.length>0 ? res.status(200).json(coincidencias):
    res.status(400).json({error: "No existe ninguna publicación del autor indicado"})
})


server.put('/posts/:id', (req,res)=>{
    const {id} = req.params
    console.log(id)
    if (req.body.title && req.body.contents) {
        const coincidencias = publications.filter(publication => {
            return publication.id == id;
        })

        coincidencias.length>0?        res.status(200).json(coincidencias):
        res.status(400).json({error: "No se recibió el id correcto necesario para modificar la publicación"})
    }
    else
    res.status(400).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"})

})


server.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    console.log(publications)

    if (id !== undefined) {
      const indexToRemove = +id - 1; // Convertir el ID a un índice
  
      if (indexToRemove >= 0 && indexToRemove < publications.length) {
        publications.splice(indexToRemove, 1); // Usar splice() para eliminar el elemento
        console.log(publications);
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({error: "No se recibió el id correcto necesario para eliminar la publicación"});
      }
    } else {
      res.status(400).json({ error: "No se recibió el ID de la publicación a eliminar" });
    }
  });
  
  
  


//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };


