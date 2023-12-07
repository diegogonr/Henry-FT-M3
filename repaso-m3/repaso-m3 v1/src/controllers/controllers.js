// ya no se necesita porque ya hay bd
// let users = []
// let posteos = []

//** de db */
const {User} =require ('../../db')


const getUsers =() =>{
    console.log(users)
    return users
}

const getUsersByName =(name) =>{
    const usersFound = users.filter(user => user.name === name)
    if (!usersFound.length) return {error: "No existe usuarios con ese nombre"}
    return usersFound;
}

const getUserByid =(id) =>{
    console.log(id)
    console.log(users)
    const userFound = users.find(user => user.id == id);        //con find se crea referencia a users
    if (!userFound) return {error: "No existe usuarios con ese id"}
    return userFound;
}

// ???? Creacion de usuario 
// let id=1
const postUser = async (name, email) => {
    //*METODO CON db, nota: a la tabla le agrega una ...s
    const newUser = await User.create({ 
        name,
        email,
    })
    return newUser;


    //*METODO SIN db
    // const newUser = { 
    //     id: id++,
    //     name,
    //     email,
    //     posts:[]
    // }
    // users.push(newUser);
    // return newUser;
}

const updateUser =(id, name, email) =>{
    const user = getUserByid(id)            //referencia a userFound que a su vez hace ref a users
    console.log(user)
    if (user.error) return user.error;

    user.name = name || user.name;
    user.email = email || user.email;

    return user;
}

const deleteUser = (id) => {
    const user = getUserByid(id) 

    if (user.error) return user.error;

    users = users.filter(user => user.id !== +id);
    return user;
}


////*** POSTEOS */

let postId= 1;

const createPost = (userId, title, content)=>{
    const user = getUserByid(userId) 

    if (user.error) return user;

    const newPost ={
        id: postId++,
        userId: userId,
        title: title,
        content: content
    }

    posteos.push (newPost);
    user.posts.push (newPost);

    return newPost;

}

const getPosteos =() => posteos;

const getPosteosByTitle =(title) => {
    const posteosFiltered = posteos.filter(posteos => posteos.title === title)

    if(!posteosFiltered.length) return {error: 'no hay posteos asociados al titulo'}

    return posteosFiltered;

};

const getPosteosById =(id) =>{
    const posteoFound = posteos.find (posteo => posteo-id === +id)

    if(!posteoFound) throw Error(`No hay posteos con ese id: {$id}`);

    return posteoFound;

}


const updatePosteo =(id, title, content) => {
    const postFound = getPosteosById(id) 

    postFound.title = title || postFound.title;
    postFound.posteo = content || postFound.content;

    return postFound;
}

const deletePosteo =(id) =>{
    const postFound = getPosteosById(id)
    const userFound = getUserByid(postFound.userId) 
 
    posteos = posteos.filter(post => post.id !== +id);
    userFound.posts = userFound.posts.filter(posteo => posteo.id !== +id);
    
    return postFound;

}

module.exports = {
    getUsers,
    getUsersByName,
    getUserByid,
    postUser, 
    updateUser, 
    deleteUser,
    createPost, 
    getPosteos, 
    getPosteosByTitle,
    getPosteosById,
    updatePosteo,
    deletePosteo
}

