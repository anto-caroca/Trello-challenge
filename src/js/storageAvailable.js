const obtenerTareasLocalStorage = (tareas) => {
  
    tareas = {"key":"value"};
    
      if(tareas.lenght > 0) {
        return 'hay info en tu local storage';
    } else if (tareas.length < 1) {
        return 'local storage vacío';
    }
    
      return tareas;
    };
    
    module.exports = obtenerTareasLocalStorage;
