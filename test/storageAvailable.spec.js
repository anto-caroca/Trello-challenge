const assert = require("assert"); 
const obtenerTareasLocalStorage = require('../src/js/storageAvailable');
let tareas = {"key":"value"};

describe('obtenerTareasLocalStorage', ()=>{
    it('debería devolver un objeto tipo string con formato key-value-pairs', ()=>{
        assert.equal(typeof tareas, "object");
    });
    
    it('debería devolver 0 si es que no hay elementos en el storage', ()=>{
        assert.equal(obtenerTareasLocalStorage === tareas.length, 0);
    });

    it('debería devolver la cantidad de elemtos guardados en el storage', ()=>{
        assert.equal(obtenerTareasLocalStorage === tareas.length, 0);
    });
    it('debería  indicar si se guardó una tarea en el storage', ()=>{
        assert.equal(obtenerTareasLocalStorage === tareas.value, 0);
    });

});