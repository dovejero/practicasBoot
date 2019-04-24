var boton = $('.menu li a');
boton.on('click', activarMarcador);
var marcador = $('#marcador');

function activarMarcador(e){
    e.preventDefault();
    var ancho = $(this).css('width');
    var margen = $(this).offset().left;
    // marcador.css('width', $(this).css('width'));
    // marcador.css('margin-left', $(this).offset().left);
    var url= $(this).attr('href');
    console.log(url);
    marcador.animate({'width': ancho, 'margin-left': margen}, 400, function(){
        window.location = url;
    })
}