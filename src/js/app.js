const hide = document.getElementById('hide');
const show = document.getElementById('show');
const tarea = document.getElementById('tarea');
const buttons = document.getElementById('buttons');

hide.addEventListener('click', hideList);
show.style.display = "none";
tarea.style.display = "none";
buttons.style.display = "none";

function hideList(){
    hide.style.display = "none";
    show.style.display = "block";
    tarea.style.display = "none";
    buttons.style.display = "block";
}

function addTarea(){
    let el = document.createElement("div");
    el.innerHTML = "<textarea class='form-control form-control-sm' type='text' id='tarea' rows='2' cols='30' placeholder='añadir tarea'></textarea>";
    document.getElementById("show").appendChild(el).focus(); 
}

function removeTarea(){
    let el = document.getElementById("show");
    el.removeChild(el.lastChild);
}

