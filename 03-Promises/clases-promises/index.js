
//*CREAR PROMESAS

const miPromesa  = new Promise ((resolve, reason)=>{  //callback executor
    resolve ('todo 200')
});


miPromesa.then (
    (value) => console.log(value),  //successHandler
    (reason) => console.log(reason)  //errorHandler
)


//* PROMESAS CON AXIOS
const axios = require ('axios');

axios.get('https://rickandmortyapi.com/api/character/')   //por default hace get
.then(
    (response) => response.data,                          //caso de exito successHandler
    // (reason) => console.log(reason)                         //errorHandler            
)
.then(
    (data) => data.results,                              //recibe el response.data del primer then           
    // (error) => console.log(error)                                 
)
.then(
    (results) => console.log(results),                               //recibe el data.results           
    // (error) => console.log(error)                                 
)
.catch (error => console.log(error))                    //se ejecuta el error en vez de todos los errores
.finally(()=>console.log("asd hola finally"))                         //callback que siempre se ejecuta


