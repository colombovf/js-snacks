let numeri_immessi_salvati = []
let somma = 0;

for (i = 0; i < 10; i ++) {
    let numeri_input = +prompt("Inserire un numero:");
    somma = somma + numeri_input;

    numeri_immessi_salvati.push(numeri_input);
    }
console.log(somma);
