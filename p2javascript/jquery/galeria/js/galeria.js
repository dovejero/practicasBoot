var articulo = $('section article');

articulo.on('click', cargarLigthbox);

function cargarLigthbox(e){
    var imagen = $(this).find('img').attr('src');
    var subtitulo = $(this).find('h4').text();
    var titulo = $(this).find('h3').text();

    console.log(imagen, subtitulo, titulo);

    $('body').append(`<div class="lightbox">
    <div class="manto">
        <div class="contenedor">
            <img src="${imagen}" alt="">
            <h4>${subtitulo}</h4>
            <h3>${titulo}</h3>
            <div class="cerrar">
                <img src="images/cerrar.png" alt="">
            </div>
        </div>
    </div>
    </div>`)
    $('.lightbox').fadeIn(400);
    $('.lightbox .contenedor').animate({'top': '60px'});
    $('.manto').css('height', document.body.clientHeight);
    var cerrar = $('.cerrar');
    cerrar.on('click', cerrarLightbox)
    $(document).on('keydown', cerrarLightbox);

}
function cerrarLightbox(e){
    if (e.keyCode == 27 || e.type=='click'){
        $('.lightbox').fadeOut(400, function(){
            $('.lightbox').remove();
        })
    }
}