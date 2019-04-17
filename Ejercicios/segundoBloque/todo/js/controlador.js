
var contador = listaTareas.length +1;

function addTarea(pTitulo, pPrioridad){
    var nuevaTarea = {'idTarea': contador, 'titulo': pTitulo, 'prioridad': pPrioridad};
    listaTareas.push(nuevaTarea);
    pintarTareas(listaTareas);
}

function borrarTarea(elemento){
    var tareaBuscada = listaTareas.find(function(tarea){
        return tarea.idTarea == elemento;
    });
    var indexArray = listaTareas.indexOf(tareaBuscada);

    // for(var i=0; i<listaTareas.length; i++){
    //     if(listaTareas[i].idTarea == elemento){
    //         var indexArray = i;
    //     }
    // }
 
                       // dos formas de hacer lo mismo


    listaTareas.splice(indexArray, 1);
    pintarTareas(listaTareas);
    if (listaTareas.length == 0){
        mensaje.textContent = 'Eliminados todos los elementos'
    }
}
function filtroPrioridad(pPrioridad) {
        var listaFiltrada = new Array();

        // for(var i=0; i<listaTareas.length; i++){
        //     if(listaTareas[i].prioridad == pPrioridad){
        //         listaFiltrada.push(listaTareas[i])
        //     }
        // }

        listaFiltrada = listaTareas.filter(function(tarea){
            return tarea.prioridad == pPrioridad;
        });
        return listaFiltrada;
}

function filtroInput(pInput) {
    console.log(pInput);
    var listaFiltrada = new Array();

    // for(var i=0; i<listaTareas.length; i++){
    //     if(listaTareas[i].prioridad == pPrioridad){
    //         listaFiltrada.push(listaTareas[i])
    //     }
    // }
    for(var i=0; i<listaTareas.length; i++){
        if(listaTareas[i].titulo.includes(pInput)){
            listaFiltrada.push(listaTareas[i])
        }
    };
    return listaFiltrada;
}