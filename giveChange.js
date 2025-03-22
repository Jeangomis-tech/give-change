function giveChange(amount) {
    //Initialize the denominations of 10€, 5€ notes and 2€ coins
    let billetsDix = 0;
    let billetsCinq = 0;
    let piecesDeux = 0;

    //Remains to be returned
    let remainingAmount = amount;
    // CASE 10€
    billetsDix = Math.floor(remainingAmount / 10);
    remainingAmount = remainingAmount % 10;

    //CASE 5€
    if (remainingAmount >= 5) {
        billetsCinq = 1;
        remainingAmount -= 5;
    }

    //CASE 2€
    piecesDeux = Math.floor(remainingAmount / 2);
    remainingAmount = remainingAmount % 2;

    // Check if there is €1 left that cannot be returned
    if (remainingAmount !== 0) {
        return "Unable to return this exact amount with the available notes/coins";
    }

    // THE RETURNED RESULT
    return {
        billetsDix: billetsDix,
        billetsCinq: billetsCinq,
        piecesDeux: piecesDeux
    };
}
module.exports = giveChange;

// Tests
console.log("Montant: 50€");
console.log(giveChange(50));

console.log("Montant: 25€");
console.log(giveChange(25));

console.log("Montant: 32€");
console.log(giveChange(32));

console.log("Montant: 7€");
console.log(giveChange(7));

console.log("Montant: 2€");
console.log(giveChange(2));
console.log("Montant: -10€");
console.log(giveChange(-10));

