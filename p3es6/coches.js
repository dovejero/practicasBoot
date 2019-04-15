class Coche {
	constructor(pMarca, pModelo, pColor) {
		this.marca = pMarca;
		this.modelo = pModelo;
		this.color = pColor;
		this.velocidad = 0;
	}

	acelerar(aumentoVel){ 
		console.log('Estoy acelerando a ' + (this.velocidad += aumentoVel) );
	}

	frenar(decrementoVel){
		console.log('Estoy frenando a ' + (this.velocidad -= decrementoVel));
	}
}

let coche1 = new Coche('Mercedes', 'T100', 'rojo')

console.log(coche1);
for (let index = 1; index < 6; index++) {
	coche1.acelerar(20);
	coche1.frenar(5);
}


	