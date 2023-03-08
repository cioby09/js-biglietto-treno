// IMPUT
// Chiedo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
const km = prompt("Quanti chilometri vuoi percorrere?");
const age = prompt("Quanti anni hai?")
console.log(km, age);

// LOGICA
// Calcolo il prezzo base del viaggio
const basePrice = km * 0.21;
console.log(basePrice);

// Calcolo gli sconti
const discount20 = basePrice * 0.2;
const discount40 = basePrice * 0.4;
console.log(discount20, discount40);

// Se il passeggero è minorenne
//      Applico uno sconto del 20%
// Altrimenti se il passeggero è over 65
//      Applico uno sconto del 40%
// Altrimenti
//      Il prezzo di base rimane invariato
let price ="";
if(age < 18) {
    price = basePrice - discount20;
} else if (age > 65) {
    price = basePrice - discount40;
} else {
    price = basePrice;
}

// OUTPUT
// Stampo il messaggio
console.log(price);
document.getElementById("price").innerHTML = price;