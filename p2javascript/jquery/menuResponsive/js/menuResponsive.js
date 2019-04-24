var botonMenu = $('.botonmovil');
botonMenu.on('click', slideMenu);
var cerrado = false;
function slideMenu(){
    cerrado = !cerrado;
    console.log(cerrado);
    // $('header nav').slideToggle(400);
    console.log(botonMenu.css('display'));
    if (cerrado){
        $('header nav').slideDown(400);
    }else{
        $('header nav').slideUp(400);
    }
}

