
//*USERS
//?RUTA GET => para que traiga todos los uisarios o por nombre
//?RUTA GET /:id  => usuario con id
//?RUTA POST => crear usuario
//?RUTA PUT => modificar usuario
//?RUTA DELETE /:id => eliminar el usuario

const usersRouter = require('express').Router();
const {getUsers, getUsersByName, getUserByid, postUser, updateUser, deleteUser} = require('../controllers/controllers')


usersRouter.get('/', (req, res)=>{
    try {
        const {name} = req.query;
        if (!name) return res.status(200).json(getUsers())   //envio todos los usuarios si no hay una query

        const users= getUsersByName(name)

        if (users.error) throw Error (users.error)
        return res.status(200).json(users)

    } catch (error) {
        return res.status(404).send(error.message)
    }

})


usersRouter.get ('/:id', (req,res) => {
    try {
        const {id} = req.params
        const user = getUserByid(id)

        if (user.error) throw Error(user.error)
        return res.status(200).json(user)


    } catch (error) {
        return res.status(404).send(error.message)
    }

})

usersRouter.post('/', async (req, res) => {
    try {
        const {name, email} = req.body

        if(!name || !email) throw Error ("faltan props")

        const newUser = await postUser(name, email)
        return res.status(200).json(newUser)

    } catch (error) {
        return res.status(404).send(error.message)
        
    }
})

usersRouter.put('/', (req,res) => {
    try {
        const {id, name, email} = req.body

        if (!id || !name || !email) throw new Error ("id obligatorio")

        const user = updateUser(id, name, email)
        if (user.error) throw Error(user.error)
        return res.status(200).json(user)


    } catch (error) {
        return res.status(400).send (error.message)
    }

})


usersRouter.delete ('/:id', (req, res) => {
    try {
        const {id} = req.params;

        const delUser = deleteUser (id)
        if (delUser.error) throw Error(delUser.error)
        return res.status(200).json(delUser)

    } catch (error) {
        return res.status(400).send (error.message)

    }
})


module.exports = usersRouter;