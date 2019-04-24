$('.menu li').hover(entrar, salir);

function entrar(){
    // $(this).css('margin-left', '0px');
    // $(this).animate({'margin-left': '0px'}, 1500);
    $(this).stop().animate({'margin-left': '0px'}, 500);
    console.log('entra');
}

function salir(){
    // $(this).css('margin-left', '-30px');
    // $(this).animate({'margin-left': '-30px'}, 1500);
    $(this).stop().animate({'margin-left': '-30px'}, 500);
    console.log('sale');
}