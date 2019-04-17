var url = 'https://jsonplaceholder.typicode.com/posts';

var contenedorBlog = document.getElementsByClassName('blog');
var miBlog = contenedorBlog[0];

var pedido = new XMLHttpRequest();

//abrir la url que me pasan desde el objeto xmlrequest

pedido.open('GET', url, true);

//envio

pedido.send();

//Estar atento a los posibles cambios de los estados de mi pedido a través de un evento

pedido.addEventListener('readystatechange', cargarArchivo);

function cargarArchivo(event){
    if(event.target.readyState == 4 && event.target.status == 200){
        // console.log(event.target.response);
        var listaPost = new Array();
        listaPost = JSON.parse(event.target.response);
        pintarPost(listaPost);
    }
}
function pintarPost(pListaPost){
    miBlog.innerHTML = '';
    
    for (post of pListaPost){
        var aleatorio = Math.floor(Math.random() * 6) + 1
        var estado = (post.id%2 == 0)? 'par': 'impar';
        var titulo = post.title;
        if (titulo.length > 20){
            titulo = titulo.substring(0, 20) + '...';
        }
        console.log('AAAA ', post.title)
        miBlog.innerHTML += `<article class="post ${estado}">
        <h2 title="${post.title}">${titulo}</h2>
        <div class="content">
            <div class="images">
                <img src="images/imagen_${aleatorio}.jpg" alt="">
            </div>
            <div class="content">
            ${post.body}
            </div>
        </div>
    </article>`
    }
}