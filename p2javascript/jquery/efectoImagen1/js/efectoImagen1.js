var imagen = $('.contenedor');
imagen.hover(mostrarInfo, ocultarInfo);

function mostrarInfo(){
    $(this).find('.info').stop().animate({'left': '0px'}, 500);
}

function ocultarInfo(){
    $(this).find('.info').stop().animate({'left': '-400px'}, 500);
}