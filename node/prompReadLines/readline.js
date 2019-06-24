const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)

// rl.question('¿Cual es tu nombre? ', (answer) => {
//     if (answer != null && answer != '') {
//         console.log('bienvenido ' + answer);
//     } else {
//         console.log('Nombre inválido')
//     }
// })

rl.question('¿Cual es tu nombre? ', (answer) => {
    console.log('bienvenido ' + answer);
    rl.setPrompt('Dime algo. (Exit para salir) ')
    rl.prompt()
    rl.on('line', (input) => {
        if (input == 'exit') {
            rl.close();
        } else {
            rl.prompt()
        }

    })
})

