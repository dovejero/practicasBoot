var izquierda = $('.izquierda');
var derecha = $('.derecha')
izquierda.on('click', moverIzquierda);
derecha.on('click', moverDerecha);
var contador = 0;
var imagenes = ['images/nutrias.jpg', 'images/elefante.jpg', 'images/mono.jpg', 'images/tigre.jpg', 'images/tortuga.jpg']

// var articulo = $('section article');

// articulo.on('click', cargarLigthbox);

// function cargarLigthbox(e){
//     var imagen = $(this).find('img').attr('src');
//     var subtitulo = $(this).find('h4').text();
//     var titulo = $(this).find('h3').text();

//     console.log(imagen, subtitulo, titulo);

//     $('body').append(`<div class="lightbox">
//     <div class="manto">
//         <div class="contenedor">
//             <img src="${imagen}" alt="">
//             <h4>${subtitulo}</h4>
//             <h3>${titulo}</h3>
//             <div class="cerrar">
//                 <img src="images/cerrar.png" alt="">
//             </div>
//         </div>
//     </div>
//     </div>`)

//     var cerrar = $('.cerrar');
//     cerrar.on('click', cerrarLightbox)
//     $(document).on('keydown', cerrarLightbox);

// }
function moverDerecha(){
    console.log(contador);
    contador++;
    if (contador > imagenes.length - 1){
        contador = 0
    }
        $('article img').attr('src', imagenes[contador])
}
function moverIzquierda(){
    contador--;
    if (contador <= 0){
        contador = imagenes.length - 1;
    }
        $('article img').attr('src', imagenes[contador])
}
// function cerrarLightbox(e){
//     if (e.keyCode == 27 || e.type=='click'){
//         $('.lightbox').fadeOut(400, function(){
//             $('.lightbox').remove();
//         })
//     }
// }