var listaTareas = new Array();

listaTareas = [
    {idTarea: 1, titulo: 'Estudiar Javascript', prioridad: 'urgente'},
    {idTarea: 2, titulo: 'Salir a correr', prioridad: 'mensual'},
    {idTarea: 3, titulo: 'Dormir', prioridad: 'diaria'}
]

function pintarTareas(listaTareas){
    var contenedorTareas = document.getElementById('tareas');
    contenedorTareas.innerHTML = '';
    for (tarea of listaTareas){
        var articulo = document.createElement('article');
        articulo.className = tarea.prioridad;
        articulo.dataset.id = tarea.idTarea;

        var tituloTarea = document.createElement('h2');
        var tituloTexto = document.createTextNode(tarea.titulo);

        var btnEliminar = document.createElement('a');
        btnEliminar.href = '#';
        btnEliminar.title = 'Eliminar';
        btnEliminar.setAttribute('onclick', 'borrarTarea(' + tarea.idTarea +')');

        var textoEliminar = document.createTextNode('Eliminar');

        btnEliminar.appendChild(textoEliminar);
        tituloTarea.appendChild(tituloTexto);
        articulo.appendChild(tituloTarea);
        articulo.appendChild(btnEliminar);

        contenedorTareas.appendChild(articulo);
    }
}
pintarTareas(listaTareas);