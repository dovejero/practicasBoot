var cesta = document.getElementById('cesta');
var contenedor = document.getElementById('contenedor');
document.addEventListener('mousemove', mover);
document.addEventListener('click', crearPelotita);
var vidas = document.getElementById('vidas');
var puntos = document.getElementById('puntos');
var idPelota = 0;
vidas.textContent = 3;
puntos.textContent = 0;

function crearPelotita(){
	var posicionInicial = Math.floor(Math.random() * 245) + 1
	var pelota = document.createElement('div')
	pelota.setAttribute('style', 'width: 10px; height:10px; background-color: black; border: 2px solid black; position: absolute; border-radius: 50%; top: 1px');
	// pelota.id = idPelota;
	// pelota.className(idPelota);
	contenedor.appendChild(pelota);
	pelota.style.left = posicionInicial + 'px';
	caerPelota(pelota);
	idPelota ++;

}

function caerPelota(pPelota){
	var posCaida = 1;

	function pelotaBaja() {
  		setTimeout(function(){
			var posRandomT = Math.floor(Math.random() * 5) + 1
			posCaida += posRandomT;
			pPelota.style.top = posCaida + 'px';
	    	if (posCaida <= 288) {
	      		pelotaBaja();
    		}else {
    			pPelota.parentNode.removeChild(pPelota)
    			vidas.textContent -= 1;
    			if (vidas.textContent == 0){
    				alert('Fin de la partida. Has conseguido ' + puntos.textContent + ' puntos')
    			}
    		}
  		}, 50);
	};
	pelotaBaja();
}

function mover(event){
	var movimiento = event.screenX;
	console.log(event.screenX);
	console.log(event.screenY);
	if (movimiento > 245)
		movimiento = 245;
	if (movimiento < 0)
		movimiento = 0;

	cesta.style.left = movimiento + ('px');
}

// pelotita();


// Durante la partida

// - Controlar si es punto o vida

// Al finalizar la partida
// - Eliminar todos los divs de las bolitas 
// - Acabar los eventos click y mousemove

