var imagen = $('.contenedor');
imagen.on('mouseover', efectoZoom);
var zoom = 1;
function efectoZoom(){
    $(this).on('wheel', function(e){
        console.log(e.originalEvent.wheelDelta);
        if((e.originalEvent.wheelDelta /120 > 0) && zoom > 1 ) {
            zoom = zoom - 0.01;
            // $('.contenedor').find('.imagen').position();
            $('.contenedor').find('.imagen').draggable();
        }
        else{
            zoom = zoom + 0.01;
        }
        
        $('.contenedor').find('.imagen').css('transform', 'scale('+zoom+')');
    });
}
