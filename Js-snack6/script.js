let numero_input = prompt("Inserire un numero:");
let numero = Math.floor(Math.random() * 10);
console.log(numero_input);
console.log(numero);

if (numero == numero_input) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}