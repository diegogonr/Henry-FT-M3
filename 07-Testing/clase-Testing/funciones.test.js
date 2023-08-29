
const {suma,mul, obj, array, promise, suma2} = require('./funciones')

beforeAll(()=>{
    console.log('before all');
})

describe ('Funciones', ()=>{                                                 ///testing suit
    it ( 'debe retornar 10 si se pasa 4 y 6', ()=>{                             //testing unitarios
        expect(suma(4,6)).toBe(10)                              // par aarray y strings
    })
    
    it ( 'debe retornar 24 si se pasa 4 y 6', ()=>{                             //testing unitarios
        expect(mul(4,6)).toBe(24)
    })
    
})                                                        


describe ('Resultados', ()=>{                                                 ///testing suit
    it ( 'debe retornar 10 si se pasa 4 y 6', ()=>{                             //testing unitarios
        expect(suma(10,6)).toBe(16)
    })
    
    it ( 'debe retornar 24 si se pasa 4 y 6', ()=>{                             //testing unitarios
        expect(mul(8,6)).toBe(48)
    })
    
})                                                        



describe ('Objetos', ()=>{                                                 ///testing suit
    it ( 'debe contener la  propiedad name', ()=>{                             //testing unitarios
        expect(obj()).toHaveProperty('name')
    })

    it ( 'debe tener 2 propiedaddes', ()=>{                             //testing unitarios
        const objectprueba=  {name: '37a', modalidad: 'FT'}
        expect(obj()).toEqual(objectprueba)                            //sirve para objetos
    })

    it ( 'debe contener la  propiedad modalidad', ()=>{                             //testing unitarios
        expect(obj().modalidad).toBeTruthy()
    })

    it ( 'debe contener la  propiedad modalidad', ()=>{                             //testing unitarios
        expect(obj().alumno).toBeFalsy()
    })

})      

describe ('Arrays', ()=>{                                                 ///testing suit
    it ( 'debe tener un string con el valor de manuel', ()=>{                             //testing unitarios
        expect(array()).toContain('manuel')
    })
    
})                                                        

//******************************TESTEAR  PROMESAS */

describe ('Promesas', ()=>{                                                 ///testing suit
    it ( 'La promesa se resuelve', ()=>{                             //testing unitarios
        return promise().then(
            value => expect(value).toBe('se resolvió')
        )

    })
    
})                                                        


//******************************MOCK FUNCTIONS */

describe ('mock functions', ()=>{                                                 ///testing suit
    it ( 'debe retornar 10 si se pasa 4 y 6', ()=>{                             //testing unitarios
        const result =(a,b) => {
            return a+b
        };
        
        const prueba = jest.fn(()=> result(4,6))
        suma2(4,6, prueba)
        expect(prueba.mock.calls.length).toBe(1)                           //espera que se llame una función a la función
    })
    
})      












