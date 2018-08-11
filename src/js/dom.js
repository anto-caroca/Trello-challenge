const hide = document.getElementById('hide');
const show = document.getElementById('show');
const show2 = document.getElementById('show2');
const tarea = document.getElementById('tarea');
const tarea2 = document.getElementById('tarea2');
const buttons = document.getElementById('buttons');
const buttons2 = document.getElementById('buttons2');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const form2 = document.getElementById('container-2');
form2.style.display = "none";

hide.addEventListener('click', hideList);
show.style.display = "none";
tarea.style.display = "none";
buttons.style.display = "none";

btn.addEventListener('click', addForm);
