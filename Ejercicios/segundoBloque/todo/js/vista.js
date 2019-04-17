var btnGuardar = document.getElementById('guardar');
btnGuardar.addEventListener('click', recogerTarea);
var filtroPrioridad = document.getElementById('prioridadFilter');
filtroPrioridad.addEventListener('change', recogerPrioridad);
var filtroActividad = document.getElementById('search');
filtroActividad.addEventListener('keyup', recogerActividad);


function recogerTarea(event){
    event.preventDefault();
    // var titulo = document.getElementById('tituloTarea').value;
    var titulo = document.getElementById('tituloTarea').value;
    var prioridad = document.getElementById('prioridad').value
    var mensaje = document.getElementById('mensaje');
    mensaje.textContent = ' '
    if (titulo!='' && prioridad !=''){
        addTarea(titulo, prioridad);
    }else {
        mensaje.textContent = 'Rellena todos los campos'
    }
}

function recogerPrioridad(event) {
    var filtradaLista = filtroPrioridad(event.target.value);
    pintarTareas(filtradaLista);
}

function recogerActividad(event) {
    var letra = event.target.value;
    var filtradaListaActividad = filtroInput(letra);
    pintarTareas(filtradaListaActividad);
}