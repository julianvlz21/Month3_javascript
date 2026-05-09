// Variable para Node.js y poder visualizar el js por consola
const prompt = require('prompt-sync')();

// Para que los usuarios ingresen los datos
let nombre = prompt("Ingresa tu nombre: ");
let edad = Number(prompt("Ingresa tu edad: "));

// Condicionales para validar errores y un mensaje para cuando se ingreso la información correctamente
if (isNaN(edad)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else if (Number(edad) < 18) {
    console.log(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
}else {
    console.log(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}
