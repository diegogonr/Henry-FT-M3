
const fulfilled1 = new Promise ((resolve, reject) =>{
    resolve('resuelto')
})


const fulfilled2 = new Promise ((resolve, reject) =>{
    resolve('resuelto2')
})

const rejected1 = new Promise ((resolve, reject) =>{
    reject('rechazado')
})


//*************CASE 1

fulfilled1.then((value) => console.log('caso1', value))          //todo bien


//*************CASE 2

rejected1.then (
    (value)=> console.log(value),
    (reason) => console.log('caso2',reason)
)


//*************CASE 3
// la promesa se resuelve y no tengo un successhandler
fulfilled1
.then ()
.then ((value)=> console.log('caso3: ', value))


//*************CASE 4
// la promesa se rechaza y no tengo un errorhandler
rejected1
.then((value)=> console.log(value))         //entrega una promesa
.then((value)=> console.log(value))
.then((value)=> console.log(value))
.catch((err) => console.log('caso 4: ', err))       //rechazado


//*************CASE 5
// 
fulfilled1
.then(
    (value) => 'te paso info',                  //te mando otra promesa resolve ('te paso info')
    (error) => console.log(error)
)
.then ((value)=> console.log('caso 5: ', value))


//*************CASE 6
//?NUNCA RETORNAR ERRORES
rejected1       //rechazando
.then(
    (value) => 'otro value',                  
    (error) => {throw error}                //si se pone return envia el error como si hubiera salido todo bien, por eso se envia el throw
)   
.then (
    (value)=> console.log('caso 6: ', value),
    (error) => console.log('caso 6: error HANDLER: ',error)
    )


//*************CASE 7
fulfilled1
.then(
    (value) => {return fulfilled2},                  
    (error) => {throw error}        //throw arroja el error
)
.then (
    (value)=> console.log('success HANDLER 2: ', value),
    (error) => console.log('error HANDLER 2: ',error)
)
.catch (error => console.log('catch: ', error))      //catch se ignora porque no hay error
