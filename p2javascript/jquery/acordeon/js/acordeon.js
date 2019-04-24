var faq = $('.faq h2');

faq.on('click', desplegar);

function desplegar(){
    $('.faq p').slideUp(300);
    $('.faq h2').removeClass('titulo');
    if($(this).next().css('display')== 'none'){
        $(this).next().slideDown(300);
        $(this).addClass('titulo');
        console.log($(this));
        // prueba.innerText = '-';
    } else {
            $(this).next().slideUp(300);
    }
    // $(this).next().slideToggle(300);
    console.log('click');
}