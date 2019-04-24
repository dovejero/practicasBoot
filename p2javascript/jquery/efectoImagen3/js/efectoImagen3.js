var imagen = $('.contenedor');
imagen.hover(mostrarInfo, ocultarInfo);

function mostrarInfo(e){
    $(this).find('.info').stop().animate({'left': '0px'}, 500);
    $(this).find('.imagen').addClass('rotar')
}

function ocultarInfo(e){
    $(this).find('.info').stop().animate({'left': '400px'}, 500);
    $(this).find('.imagen').removeClass('rotar')

}