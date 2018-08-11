function hideList(){
    hide.style.display = "none";
    show.style.display = "block";
    tarea.style.display = "none";
    buttons.style.display = "block";
}

function addTarea(){
    let el = document.createElement("div");
    el.innerHTML = "<textarea class='form-control form-control-sm' type='text' id='tarea' rows='2' cols='30' placeholder='añadir tarea'></textarea>";
    show.appendChild(el).focus(); 
    
}

function addTarea2(){
    let el2 = document.createElement("div");
    el2.innerHTML = "<textarea class='form-control form-control-sm' type='text' id='tarea2' rows='2' cols='30' placeholder='añadir tarea'></textarea>";
    show2.appendChild(el2).focus(); 
}

 btn.addEventListener('click', addForm);

function addForm(){
form2.style.display = "block"; 
tarea2.style.display = "none";
}

function removeTarea(){
    let el = document.getElementById("show");
    el.removeChild(el.lastChild);
}

function removeTarea2(){
    let el2 = document.getElementById("show2");
    el2.removeChild(el2.lastChild);
}
