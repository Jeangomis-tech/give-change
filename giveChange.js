function giveChange(montant) {
    if (montant <= 0) {
        return "The amount must be greater than 0.";
    }

    // Impossible case (1 and 3 euros)
    if (montant === 1 || montant === 3) {
        return `${montant} € : Impossible to return with 10, 5 and 2 coins.`;
    }

    let billetsDix = Math.floor(montant / 10);
    let remainingAmount = montant % 10;

    let billetsCinq = 0;
    let piecesDeux = 0;

    // Gestion des différents cas pour le reste
    switch (remainingAmount) {
        case 1:
            if (billetsDix > 0) {
                billetsDix--;
                billetsCinq = 1;
                piecesDeux = 3;
            }
            break;
        case 2:
            piecesDeux = 1;
            break;
        case 3:
            if (billetsDix > 0) {
                billetsDix--;
                billetsCinq = 1;
                piecesDeux = 4;
            }
            break;
        case 4:
            piecesDeux = 2;
            break;
        case 5:
            billetsCinq = 1;
            break;
        case 6:
            piecesDeux = 3;
            break;
        case 7:
            billetsCinq = 1;
            piecesDeux = 1;
            break;
        case 8:
            piecesDeux = 4;
            break;
        case 9:
            billetsCinq = 1;
            piecesDeux = 2;
            break;
    }

    // Construction du résultat
    const parts = [];

    if (billetsDix > 0) {
        parts.push(`${billetsDix} billet(s) de 10€`);
    }

    if (billetsCinq > 0) {
        parts.push(`${billetsCinq} billet(s) de 5€`);
    }

    if (piecesDeux > 0) {
        parts.push(`${piecesDeux} pièce(s) de 2€`);
    }

    return `${montant} € = ${parts.join(" + ")}`;
}

// Version avec interface console
function startInterface() {
    console.log("\nEntrez 'quit' pour quitter");

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function prompt() {
        rl.question('\nMontant à rendre (en euros) : ', (input) => {
            if (input.toLowerCase() === 'quit') {
                console.log("Merci d'avoir utilisé le système. Au revoir !");
                rl.close();
                return;
            }

            const montant = parseInt(input);

            if (isNaN(montant)) {
                console.log("Veuillez entrer un nombre valide.");
            } else {
                console.log(giveChange(montant));
            }

            prompt();
        });
    }

    prompt();
}

// Pour lancer l'interface console
if (typeof require !== 'undefined' && require.main === module) {
    startInterface();
}

// Export pour les tests
module.exports = { giveChange };