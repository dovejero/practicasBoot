var listaAficiones = new Array(); //Array multidimensional de objetos json
var boton = document.getElementById('boton');
boton.addEventListener('click', capturarDatos);
var ul = document.getElementById('listado');

function capturarDatos(event){
	event.preventDefault();
	console.log(event.target);
	var nombre = document.getElementById('nombre').value;
	var aficion = document.getElementById('aficion').value;
	guardar(nombre, aficion);
}

function guardar(pNombre, pAficion){
	// var arrayAficiones;
	// arrayAficiones.nombre = pNombre;
	// arrayAficiones.aficion = pAficion;
	var arrayAficiones = {nombre: pNombre, aficion: pAficion};
	listaAficiones.push(arrayAficiones);
	pintar(arrayAficiones)
}

function pintar(arrayAficiones){
	var li = document.createElement('li');
	var strong = document.createElement('strong');
	textStrng = document.createTextNode(arrayAficiones.nombre + ': ');
	strong.appendChild(textStrng);
	li.appendChild(strong);
	textli = document.createTextNode(arrayAficiones.aficion);
	li.appendChild(textli);	
	ul.appendChild(li);
}