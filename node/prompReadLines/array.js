const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)

let array = [];

rl.setPrompt('Escribe palabras. (Exit para salir) ')
rl.prompt()
rl.on('line', (input) => {
    if (input == 'exit') {
        rl.close();
    } else {
        array.push(input);
        rl.prompt()
    }

})
rl.on('close', () => {
    console.log(array);
})
