let numeri_immessi_dispari = []

for (i = 0; i < 6; i ++) {
    let numeri_input = +prompt("Inserire un numero:")
    if (numeri_input % 2 == 1) {
    numeri_immessi_dispari.push(numeri_input);
    }
    }

console.log(numeri_immessi_dispari);