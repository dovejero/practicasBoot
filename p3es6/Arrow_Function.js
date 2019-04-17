setInterval(() => console.log('Hola'), 1000)

function sumar(a, b) {
    return a+b
}

let sumarv2 = (a, b) => a+b

let mostrarCadena = cadena => console.log(cadena)

console.log(sumar(3, 4))
console.log(sumarv2(3, 4))
mostrarCadena('Hola Mundo')



function sumaRetardo(a, b, done) {
    setTimeout(() => {
        let res = a + b   
        done(res)
    }, 3000)
}

sumaRetardo(3, 4, result => console.log(result))
sumaRetardo(5, 7, result => {
    let value = result * 2
    console.log(value)
})

