const assert = require('chai').assert;
global.window = global;
require('../src/js/storageAvailable'); //Sólo enlaza el archivo, parecido al script de html

describe('Testing for availability', ()=>{ //Describe lo que habrá dentro de cada función
    describe('Debería verificar si el local storage está disponible', ()=>{
        it('Debería guardarse un elemento tipo string en forma de key-value pairs', ()=>{ //Caso de prueba
            assert.equal(storageAvailable("[{'tarea': 'sdfsdfszf'}]"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(storageAvailable("[{tarea}]"), false);
        
        })
    })
})
