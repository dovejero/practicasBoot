var botonMenu = $('.botonmovil');
botonMenu.on('click', slideMenu);
var cerrado = false;
function slideMenu(){
    cerrado = !cerrado;
    console.log(botonMenu.css('display'));
    if (cerrado){
        $('header nav').stop().animate({'margin-left': '0%'}, 500);
    }else{
        $('header nav').stop().animate({'margin-left': '-100%'}, 500);
    }
}