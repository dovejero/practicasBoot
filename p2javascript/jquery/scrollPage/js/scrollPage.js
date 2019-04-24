// var seccion = $('nav ul li a');
var seccion2 = $('a');

seccion2.on('click', function(){
    var seccion = $(this).attr('href');
    var distancia = $(seccion).offset().top;
    $('html, body').animate({'scrollTop': distancia}, 1000);
});

