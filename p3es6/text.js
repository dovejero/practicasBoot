
// SÍNCRONO
// function contador(end){
//     let indice = 0;
//     let interval = setInterval(() => {
//         console.log(indice++)
//         if (indice == end) {
//                 clearInterval(interval);
//         }
//     }, 1000);

// }
// console.log('inicio')
// contador(5);
// console.log('fin')

// ASINCRONÍA CON CALLBACK
// function contador2(end, done){
//     let indice = 0;
//     let interval = setInterval(() => {
//         console.log(indice++)
//         if (indice == end) {
//                 clearInterval(interval);
//                 done();
//         }
//     }, 1000);
    
// }
// console.log('inicio')
// contador2(5, (a) => {
//     console.log('fin')
// });

//PROMESAS NEW PROMISE
console.log('inicio')
let prom = new Promise ((resolve, reject)=>{
    let indice = 0;
    let interval = setInterval(() => {
        console.log(indice++)
        if (indice == 5) {
            clearInterval(interval);
            resolve('TERMINADO CORRECTO');
        }else{
            clearInterval(interval);
            reject('TERMINADO CON ERROR');
        }
    }, 1000);
});
prom.then((a)=>{
    console.log(a);
    console.log('final');
}).catch((b)=>{
    console.log(b);
})
