var cesta = document.getElementById('cesta');
var contenedor = document.getElementById('contenedor');
document.addEventListener('mousemove', mover);
function mover(event){
	var movimiento = event.screenX;
	console.log(event.screenX);
	if (movimiento > 245)
		movimiento = 245;
	if (movimiento < 0)
		movimiento = 0;

	cesta.style.left = movimiento + ('px');
}

//10 300