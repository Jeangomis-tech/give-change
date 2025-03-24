const { giveChange } = require('./giveChange'); // Remplacez par le nom de votre fichier

describe('giveChange function', () => {
    // Tests pour les cas d'erreur
    test('should return error message for negative amount', () => {
        expect(giveChange(-5)).toBe("The amount must be greater than 0.");
    });

    test('should return error message for zero amount', () => {
        expect(giveChange(0)).toBe("The amount must be greater than 0.");
    });

    // Tests pour les cas impossibles
    test('should return impossible for 1€', () => {
        expect(giveChange(1)).toBe("1 € : Impossible to return with 10, 5 and 2 coins.");
    });

    test('should return impossible for 3€', () => {
        expect(giveChange(3)).toBe("3 € : Impossible to return with 10, 5 and 2 coins.");
    });

    // Tests pour les montants pairs
    test('should return only 2€ coins for 2€', () => {
        expect(giveChange(2)).toBe("2 € = 1 pièce(s) de 2€");
    });

    test('should return only 2€ coins for 4€', () => {
        expect(giveChange(4)).toBe("4 € = 2 pièce(s) de 2€");
    });

    test('should return only 5€ bill for 5€', () => {
        expect(giveChange(5)).toBe("5 € = 1 billet(s) de 5€");
    });

    test('should return combination for 6€', () => {
        expect(giveChange(6)).toBe("6 € = 3 pièce(s) de 2€");
    });

    test('should return combination for 8€', () => {
        expect(giveChange(8)).toBe("8 € = 4 pièce(s) de 2€");
    });

    // Tests pour les montants impairs (sauf 1 et 3)
    test('should handle 7€ correctly', () => {
        expect(giveChange(7)).toBe("7 € = 1 billet(s) de 5€ + 1 pièce(s) de 2€");
    });

    test('should handle 9€ correctly', () => {
        expect(giveChange(9)).toBe("9 € = 1 billet(s) de 5€ + 2 pièce(s) de 2€");
    });

    test('should handle 11€ correctly (10+1 case)', () => {
        expect(giveChange(11)).toBe("11 € = 1 billet(s) de 5€ + 3 pièce(s) de 2€");
    });

    test('should handle 13€ correctly (10+3 case)', () => {
        expect(giveChange(13)).toBe("13 € = 1 billet(s) de 5€ + 4 pièce(s) de 2€");
    });

    // Tests avec des billets de 10€
    test('should return only 10€ bills for 10€', () => {
        expect(giveChange(10)).toBe("10 € = 1 billet(s) de 10€");
    });

    test('should return only 10€ bills for 20€', () => {
        expect(giveChange(20)).toBe("20 € = 2 billet(s) de 10€");
    });

    test('should handle 21€ correctly', () => {
        expect(giveChange(21)).toBe("21 € = 1 billet(s) de 10€ + 1 billet(s) de 5€ + 3 pièce(s) de 2€");
    });

    test('should handle 23€ correctly', () => {
        expect(giveChange(23)).toBe("23 € = 1 billet(s) de 10€ + 1 billet(s) de 5€ + 4 pièce(s) de 2€");
    });

    test('should handle 25€ correctly', () => {
        expect(giveChange(25)).toBe("25 € = 2 billet(s) de 10€ + 1 billet(s) de 5€");
    });

    test('should handle 28€ correctly', () => {
        expect(giveChange(28)).toBe("28 € = 2 billet(s) de 10€ + 4 pièce(s) de 2€");
    });
    test('should handle 31€ correctly', () => {
        expect(giveChange(31)).toBe("31 € = 2 billet(s) de 10€ + 1 billet(s) de 5€ + 3 pièce(s) de 2€");
    });
    test('should handle 33€ correctly', () => {
        expect(giveChange(33)).toBe("33 € = 2 billet(s) de 10€ + 1 billet(s) de 5€ + 4 pièce(s) de 2€");
    });
    test('should handle 38€ correctly', () => {
        expect(giveChange(38)).toBe("38 € = 3 billet(s) de 10€ + 4 pièce(s) de 2€");
    });


    test('should handle 32€ correctly', () => {
        expect(giveChange(32)).toBe("32 € = 3 billet(s) de 10€ + 1 pièce(s) de 2€");
    });

    // Test avec un grand montant
    test('should handle 99€ correctly', () => {
        expect(giveChange(99)).toBe("99 € = 9 billet(s) de 10€ + 1 billet(s) de 5€ + 2 pièce(s) de 2€");
    });
});