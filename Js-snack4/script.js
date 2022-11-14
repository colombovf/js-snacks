let nomi_lista = ["Antonio","Francesco","Giovanni","Aldo","Giacomo","Bartolomeo"];
let nome_input = prompt("Inserire il proprio nome:");


if (nomi_lista.includes(nome_input)) {
    console.log("Congratulazioni, il suo nome è presente sulla lista, entri pure...");
} else {
    console.log("Ci dispiace il suo nome non è presente sulla lista, non può entrare...");
}
