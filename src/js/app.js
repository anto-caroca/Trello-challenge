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
    tarea.style.display = "block";
    buttons.style.display = "block";
}

function addForm(){
    let el = document.createElement("div");
    
    el.innerHTML = "<input class='form-control form-control-sm' type='text' id='tarea' placeholder='añadir tarea' >";
    document.getElementById("show").appendChild(el);
}

function removeTarea(){
    let el = document.getElementById("show");
    el.removeChild(el.childNodes[0]);
}
