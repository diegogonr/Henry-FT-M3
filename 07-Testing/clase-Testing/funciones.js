
const suma =(a,b)=> a+b;
const mul =(a,b)=> a*b;

const obj =()=> {
    return {name: '37a', modalidad: 'FT'}
}

const array =() =>{
    const arr= ["diego", "manuel", "gonzales"]
    return arr
}

const promise =() =>{
    const newPromise = new Promise ((resolve, reject)=>{
        resolve ('se resolvió')
    })
    return newPromise
}



const result =(a,b) => a+b;
const suma2 = (a,b, result)=>{
    result(a,b)
}





module.exports ={
    suma,
    mul,
    obj,
    array,
    promise,
    suma2,
}