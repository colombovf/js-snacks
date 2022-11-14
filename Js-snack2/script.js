let parola_1 = prompt("Inserire una parola:");
let parola_2 = prompt("Inserire una parola:");
let calcolo_parola_1 = parola_1.length;
let calcolo_parola_2 = parola_2.length;


if (calcolo_parola_1 >= calcolo_parola_2) {
    console.log("La parola con più lettere è: " + parola_1);
} else if (calcolo_parola_2 >= calcolo_parola_1) {
    console.log("La parola con più lettere è: " + parola_2);
}