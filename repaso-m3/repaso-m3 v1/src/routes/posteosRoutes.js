

//*POSTEOS
//?RUTA GET => trae todos los posteos
//? RUTA POST => crear posteos
//?RUTA GET /:id => posteo especifico
//?RUTA PUT => modifficar posteo
//?RUTA DELETE /:id =>  eliminar posteo


const posteosRouter = require('express').Router();
const {createPost, getPosteos, getPosteosByTitle, getPosteosById, updatePosteo,deletePosteo} = require ('../controllers/controllers')


posteosRouter.post ('/', (req, res) => {
    try {
        const {userId, title, content} =req.body;

        if (!userId || !title || !content) throw Error('falta info ');

        const newPost = createPost(userId, title, content);

        if(newPost.error) throw Error (newPost.error)

        return res.status(200).json(newPost);

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

posteosRouter.get ('/', (req, res) => {
    try {
        const {title} = req.query
        if ( !title ) return res.status(200).json(getPosteos ());

        const PosteosByTitle = getPosteosByTitle(title)

        if(PosteosByTitle.error) throw Error (newPost.error)
        
        return res.status(200).json(PosteosByTitle);


    } catch (error) {
        return res.status(404).send(error.message);
        
    }
})

//? find () esto es unico es un objeto
//? filter( esos son varios, es un array de objetos

posteosRouter.get('/:id', (req, res) => {
    try {
        const {id} = req.params
        const posteoFound = getPosteosById(id);
        return res.status(200).json(posteoFound);
        
    } catch (error) {
        return res.status(404).send(error.message);

    }
})

posteosRouter.put('/', (req, res) => {
    try {
        const {id, title, content} = req.body;

        if (!id) throw Error ('ID NECESARIO');

        const postFound = updatePosteo(id, title, content)
        return res.status(200).json(postFound);


    } catch (error) {
      return res.status(404).send(error.message);

    }
})

posteosRouter.delete('/:id', (req, res) => {
    try {
        const {id} = req.params;

        const delPosteo = deletePosteo(id);
        return res.status(200).json(delPosteo);


    } catch (error) {
        return res.status(404).send(error.message);

    }
})

module.exports = posteosRouter;