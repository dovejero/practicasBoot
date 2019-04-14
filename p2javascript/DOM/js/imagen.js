var imagen = document.getElementById('imagen');
imagen.src = 'images/bbass.jpg'
imagen.style.width = '200px';
imagen.style.padding = '20px';
imagen.style.border = '1px solid black';
imagen.style.transform = 'rotateZ(30deg)';
imagen.title = 'Hola Hola Caracola';

alert(imagen.style.width);
alert(imagen.getAttribute('id'));

// para poner varios estilos de una vez
imagen.setAttribute('style', imagen.getAttribute('style') + 'background-color: red; color: black;');
