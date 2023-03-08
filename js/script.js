// IMPUT
// Chiedo all'utente il numero di chilometri che vuole percorrere
const km = prompt("Quanti chilometri vuoi percorrere?");
console.log(km);

// Se "km" non è NaN allora continuo
if (!isNaN(km)) {
    console.log("I chilometri inseriti sono numerici")
    
    // Chiedo all'utente l'età del passeggero 
    const age = prompt("Quanti anni hai?")
    console.log(age);

    // Se "km" non è NaN allora continuo
    if (!isNaN(age)) {
        console.log("L'età inserita è numerica")
        
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
        let discountedPrice ="";
        if(age < 18) {
            discountedPrice = basePrice - discount20;
        } else if (age > 65) {
            discountedPrice = basePrice - discount40;
        } else {
            discountedPrice = basePrice;
        }
        console.log(discountedPrice);

        // Arrotondiamo il prezzo ad un massimo di due decimali
        let price = discountedPrice.toFixed(2);

        // OUTPUT
        // Stampo il messaggio
        console.log(price);
        const message = "Il prezzo del tuo biglietto è: ";
        document.getElementById("train-price").innerHTML = message + price + " €";
    } else {
        console.log("L'età inserita non è valida. Ricaricare la pagina.")
        document.getElementById("train-price").innerHTML = "L'età inserita non è valida. Ricaricare la pagina."
    }
} else {
    console.log("I chilometri inseriti non sono validi. Ricaricare la pagina.")
    document.getElementById("train-price").innerHTML = "I chilometri inseriti non sono validi. Ricaricare la pagina."
}