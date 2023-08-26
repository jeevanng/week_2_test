const{rollDice} = require('../src/diceRolling');

describe("Casual TableTop gamer wants to...", () => {

   test("...wants to roll a D6 and see a valid result.", () => {

        expect(rollDice().toBeGreaterThan(0));

   }); 

});

describe("Tabletop RPG gamer...", () => {

    test("...wants to roll a D20 with advantage and see both rolled results as well as best roll.", () => {
 
    }); 

    test("...wants to roll a D20 with disadvantage and see both rolled results as well as worst roll.", () => {
 
    }); 

    // In DnD we have these dice;
    // D4, D6, D8, D10, D12, D20, D100

    describe("...wants to roll a variety dice, specifically, they want to roll a ...", () => {

        test("D4", () => {

        });

        
        test("D6", () => {

        });

        
        test("D8", () => {

        });

    });
 
 });

