const obtenerListaTareas = (tareas) => {
  
    tareas = "<textarea class='form-control form-control-sm' type='text' id='tarea' rows='2' cols='30' placeholder='añadir tarea'></textarea>";
    
      if(tareas.lenght > 0) {
        return 'hay tareas';
    } else if (tareas.length < 1) {
        return 'no hay tareas';
    }
    
      return tareas;
    };
    
    module.exports = obtenerListaTareas;
