
//Initialiser les coupure de billets de 10€, 5€ et pièces de 2€

function giveChange(amount) {
    let billetsDix = 0;
    let billetCinq = 0;
    let pieceDeux = 0;
// Reste à rendre

    let remainingAmount = amount

    //Case 10€
    billetsDix = Math.floor(remainingAmount / 10);
    remainingAmount = remainingAmount % 10;
    //Case 5€
    if(remainingAmount >= 5) {
        billetCinq = 1;
        remainingAmount -= 5

        //Case 2€
        pieceDeux = Math.floor(remainingAmount / 2);
        remainingAmount = remainingAmount % 2;

        //Vérifier au cas où il resterai 1€

        if(remainingAmount !==0) {
            return "Impossible de rendre la monnaie avec les billets/pièces disponibles "
        }
        //Le result

        return{
            billetsDix: billetsDix,
            billetCinq: billetCinq,
            pieceDeux: pieceDeux,

        }
    }

}
//Test
console.log("Montant: 50€");
console.log(giveChange(50));

console.log("Montant: 25€");
console.log(giveChange(25));

console.log("Montant: 45€");
console.log(giveChange(45));

console.log("Montant: 9€");
console.log(giveChange(9));

console.log("Montant: 2€");
console.log(giveChange(2));
