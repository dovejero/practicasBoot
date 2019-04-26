let personas = [
    { nombre: 'Mario', apellidos: 'Girón', edad: 35 },
    { nombre: 'Rosa', apellidos: 'García', edad: 21 },
    { nombre: 'Antonio', apellidos: 'Martínez', edad: 65 },
    { nombre: 'Carlos', apellidos: 'Rodríguez', edad: 23 },
    { nombre: 'Esteban', apellidos: 'Martín', edad: 89 },
]
console.log(personas);
// let personasMas5 = personas.map((item) => {
//     let newItem = {nombre: item.nombre, apellidos: item.apellidos, edad: item.edad +5};s
//     return(newItem);
// })
// console.log(personasMas5);

// let personasMas5Bis = personas.map((item) => {
//     let newItem = {...item, edad: item.edad +5};
//     return(newItem);
// })

// spread operator 
let personasMas5Bis = personas.map(item => ({...item, edad: item.edad +5}))
console.log('EDADES SUMADAS 5 AÑOS', personasMas5Bis);

//FILTER mayores de 50

// let personasMas5Filter = personasMas5Bis.filter((item)=>{
//     return item.edad > 50;
// })
let personasMas5Filter = personasMas5Bis.filter(item => (item.edad > 50));
console.log('MAYORES DE 50', personasMas5Filter);

//FIND retorna la primera q cumpla la condición

// let personasCon65 = personasMas5Filter.find((item) =>{
//     return item.edad == 70;
// })
let personasCon65 = personasMas5Filter.find(item => item.edad == 70)
console.log('EDAD DE 70', personasCon65);

console.log('TODOS MAYOR DE 18? ', personas.every(item => item.edad > 18));
console.log('ALGUNO MAYOR DE 70? ', personas.some(item => item.edad > 18));

console.log(personas.sort((a,b)=> a.edad - b.edad));