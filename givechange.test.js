// giveChange.test.js
const giveChange = require('./giveChange');

describe('Test the giveChange function', () => {
    // Cas de base
    test('give change for 0€', () => {
        expect(giveChange(0)).toEqual({
            billetsDix: 0,
            billetsCinq: 0,
            piecesDeux: 0
        });
    });

    // Tests pour des montants exacts de billets/pièces
    test('give change for 10€', () => {
        expect(giveChange(10)).toEqual({
            billetsDix: 1,
            billetsCinq: 0,
            piecesDeux: 0
        });
    });

    test('give change for 5€', () => {
        expect(giveChange(5)).toEqual({
            billetsDix: 0,
            billetsCinq: 1,
            piecesDeux: 0
        });
    });

    test('give change for 2€', () => {
        expect(giveChange(2)).toEqual({
            billetsDix: 0,
            billetsCinq: 0,
            piecesDeux: 1
        });
    });

    // Tests pour des combinaisons simples
    test('give change for 15€', () => {
        expect(giveChange(15)).toEqual({
            billetsDix: 1,
            billetsCinq: 1,
            piecesDeux: 0
        });
    });

    test('give change for 12€', () => {
        expect(giveChange(12)).toEqual({
            billetsDix: 1,
            billetsCinq: 0,
            piecesDeux: 1
        });
    });

    test('give change for 7€', () => {
        expect(giveChange(7)).toEqual({
            billetsDix: 0,
            billetsCinq: 1,
            piecesDeux: 1
        });
    });

    // Tests pour des combinaisons complexes
    test('give change for 42€', () => {
        expect(giveChange(42)).toEqual({
            billetsDix: 4,
            billetsCinq: 0,
            piecesDeux: 1
        });
    });

    test('give change for 37€', () => {
        expect(giveChange(37)).toEqual({
            billetsDix: 3,
            billetsCinq: 1,
            piecesDeux: 1
        });
    });

    test('give change for 99€', () => {
        expect(giveChange(99)).toEqual({
            billetsDix: 9,
            billetsCinq: 1,
            piecesDeux: 2
        });
    });

    // Tests for impossible cases (montants impairs)
    test('give change for 1€ - impossible', () => {
        expect(giveChange(1)).toBe("Unable to return this exact amount with the available notes/coins");
    });

    test('give change for 3€ - impossible', () => {
        expect(giveChange(3)).toBe("Unable to return this exact amount with the available notes/coins");
    });

    test('give change for 23€ - impossible', () => {
        expect(giveChange(23)).toBe("Unable to return this exact amount with the available notes/coins");
    });

    // Tests for negatives amount
    test('give change for -10€', () => {
        expect(giveChange(-10)).toEqual({
            billetsDix: -1,
            billetsCinq: 0,
            piecesDeux: -0
        });
    });

    // Tests pour les nombres décimaux
    test('give change for 10.5€ (behavior with decimal numbers)', () => {
        expect(giveChange(10.5)).toBe("Unable to return this exact amount with the available notes/coins");
    });
});