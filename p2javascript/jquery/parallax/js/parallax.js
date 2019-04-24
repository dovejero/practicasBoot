var seccion2 = $('a');

seccion2.on('click', function(){
    var seccion = $(this).attr('href');
    var distancia = $(seccion).offset().top;
    $('html, body').animate({'scrollTop': distancia}, 1000);
});

$(window).scroll(efectoParallax);

function efectoParallax(){
    var barraScroll = $(window).scrollTop(); //alto del scroll desde el top
    var escala = 100 + (barraScroll*0.1);
    console.log(barraScroll);
    $('body').css('background-position', 'center -' + barraScroll*(0.2) + 'px');
    $('body').css('background-size', escala +'%');
}