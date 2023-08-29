
//************************************* FUNCIONES GENERADORAS *///////////////////////////////////////

//??????????EJEMPLO 1

function* generatorShowInstructors (){

    console.log('iniciando');
    yield 'Dai'
    yield 'Yor'
    console.log('terminando')
    return 'terminando'
}

const generatorObject = generatorShowInstructors();
console.log(generatorObject)
console.log(generatorObject.next())                                   //aqui recien se ejecuta la funcion
console.log(generatorObject.next())
console.log(generatorObject.next())


//??????????EJEMPLO 2

function* naturalNumber(){
    let number=1;
    while(true){
        yield number;
        number ++;
    }
}

const generatorObject2 = naturalNumber();
console.log(generatorObject2)
console.log(generatorObject2.next())                                     //se pueden controlar los pasos del while
console.log(generatorObject2.next())
console.log(generatorObject2.next())




//************************************* ASYNC AWAIT *//////////////////////////////////////

const axios = require ('axios')

// async function getUsers(){
//     const {data} = await axios ('https://jsonplaceholder.typicode.com/users')            //va a esperar la rpta para avanzar 
//     console.log(data)

// }

const getUsers = async () =>{
    try {
        const {data} = await axios ('https://jsonplaceholder.typicode.com/users')            //va a esperar la rpta para avanzar 
        // console.log(data)
    
        const users = data.map (user =>{
            return {
                id:user.id,
                name:user.name
            }
        })
        return users;
    } catch (error) {                                                                       ///para el manejo de errores
        console.log('hubo un error')
    }

}

// console.log(getUsers())                                                                       //sale pendiente la promesa
getUsers().then(response => console.log(response))                                                //para obtener resultados, ya que getUsers devuelve una promesa 




















