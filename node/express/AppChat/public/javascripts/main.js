let socket = io()
$('#boton').click((e) => {
    //- console.log(e)
    let nombre = $('#nombre').val();
    let mensaje = $('#mensaje').val();
    let chatMensaje = {
        usuario: nombre,
        mensaje: mensaje
    }
    //- console.log(chatMensaje);
    socket.emit('chat:mensaje', chatMensaje);
})
moment.locale('es')
socket.on('chat:mensaje', (data) => {
    enviarNotificacion(data.usuario, data.mensaje);
    $('#contenido').append(`<li><b>${data.usuario}</b>: ${data.mensaje} - <small>${moment().format('LLL')}</small></li>`)
})
socket.on('chat:users', (data) => {
    $('#numusers').text(`Usuarios conectados ${data}`)
})

function enviarNotificacion(nick, message) {
    if (Notification.permission === 'granted') {
        new Notification(`${nick} ha enviado un mensaje`, {
            body: message
        })

    } else {
        Notification.requestPermission((permission) => {
            if (permission === 'granted') {
                new Notification(`${nick} ha enviado un mensaje`, {
                    body: message
                })
            }
        })
    }
}