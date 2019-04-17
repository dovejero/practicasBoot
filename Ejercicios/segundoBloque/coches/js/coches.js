var flipao= document.getElementById('flipao');
var ferrari = document.getElementById('ferrari');
var mercedes = document.getElementById('mercedes');
var avanceFlipao = 0;
var avanceFerrari = 0;
var avanceMercedes = 0;
const posicionFinal = 675;
var nitro = 3;
document.addEventListener('keydown', acelerarFlipao);
var intervalo1 = setInterval(acelerarFerrari, 100);
var intervalo2 = setInterval(acelerarMercedes, 100);

function acelerarFlipao(event){
    console.log('press', event.keyCode);
    switch (event.keyCode) {
        case 32:
            avanceFlipao += 15;
            break;
        case 78:
            if (nitro > 0){
                avanceFlipao += 40;
                nitro --
            }
            break;
        default:
            break;
    }

    if (avanceFlipao <= posicionFinal){
        flipao.style.marginLeft = avanceFlipao + 'px';
    } else{
        document.getElementById('mensaje').textContent = 'Has ganado';
        terminarCarrera();
    }
}

function acelerarFerrari(){
    avanceFerrari += 10;
    if (avanceFerrari <= posicionFinal){
        ferrari.style.marginLeft = avanceFerrari + 'px';
    } else{
        document.getElementById('mensaje').textContent = 'Gana Vettel';
        terminarCarrera();
    }
}

function acelerarMercedes(){
    avanceMercedes += Math.floor(Math.random()*20)+1;
    if (avanceMercedes <= posicionFinal){
        mercedes.style.marginLeft = avanceMercedes + 'px';
    } else{
        document.getElementById('mensaje').textContent = 'Gana Hamilton';
        terminarCarrera();
    }
}
function terminarCarrera(){
    document.removeEventListener('keydown', acelerarFlipao);
    clearInterval(intervalo1);
    clearInterval(intervalo2);
}