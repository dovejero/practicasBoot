const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)
const fs = require('fs');

let array = [];

rl.question('¿Cual es tu nombre? ', (answer) => {
    fs.appendFileSync('../md/' + answer + '.md', `Fichero de ${answer} \p`);
    rl.setPrompt('Escribe palabras. (Exit para salir) ')
    rl.prompt()
    rl.on('line', (input) => {
        if (input == 'exit') {
            rl.close();
        } else {
            array.push(input);
            fs.appendFile('../md/' + answer + '.md', input, (err) => {
                if (err) console.log(err);
            });
            rl.prompt();
        }

    })
    rl.on('close', () => {
        console.log(array);
    })
})