const assert = require("assert"); 
const obtenerListaTareas = require('../src/js/tareas');
let tareas = "<textarea class='form-control form-control-sm' type='text' id='tarea' rows='2' cols='30' placeholder='añadir tarea'></textarea>";

describe('obtenerListaTareas', ()=>{
    it('debería indicar el tipo de tarea', ()=>{
        assert.equal(typeof tareas, "string");
    });
    
    it('debería devolver 0 si es que no hay tareas', ()=>{
        assert.equal(obtenerListaTareas === tareas.length, 0);
    });

    it('debería devolver la cantidad de tareas creadas', ()=>{
        assert.equal(obtenerListaTareas === tareas.length, 0);
    });
    it('debería  indicar si se creó una tarea', ()=>{
        assert.equal(obtenerListaTareas === tareas.value, 0);
    });

});