const{rollDice, rollDiceWithDisadvantage, rollDiceWithAdvantage} = require('../src/diceRolling');


// beforeEach(() => {
//     console.log("message runs BEFORE each individual test.")
// }); 

// afterEach(() => {
//     console.log("message runs AFTER each individual test")
// });

// We can use this in a real life example. Before each test, we connect to a database. 
// Then after the test, we can disconnect from the database.

describe("Casual TableTop gamer wants to...", () => {

   test("...wants to roll a D6 and see a valid result.", () => {

        // Calling the function twice, it will not return same number since it is random 
        // instead we can;

        let diceResult = rollDice();

        expect(diceResult).toBeGreaterThan(0);
        expect(diceResult).toBeLessThanOrEqual(6);
   }); 

});

describe("Tabletop RPG gamer...", () => {

    test("...wants to roll a D20 with advantage and see both rolled results as well as best roll.", () => {

        let rollResult = rollDiceWithAdvantage(20);
        // console.log("Roll Result = \n" + rollResult.rolls);
        console.log("Roll Result: \n" + JSON.stringify(rollResult, null, 4));

        expect(rollResult.finalResult).toBeGreaterThan(0);
        expect(rollResult.finalResult).toBeLessThanOrEqual(20);

        expect(rollResult.rolls).toHaveLength(2);
        expect(rollResult.rolls).toContain(rollResult.finalResult);
 
    }); 

    }); 


    // let rollDiceWithDisadvantage = jest.fn().mockReturnValue({
    //     finalResult: 1,
    //     rolls: [
    //         1, 20
    //     ]
    // });

    test("...wants to roll a D20 with disadvantage and see both rolled results as well as worst roll.", () => {

        let rollResult = rollDiceWithDisadvantage(20);
        // console.log("Roll Result = \n" + rollResult.rolls);
        console.log("Roll Result: \n" + JSON.stringify(rollResult, null, 4));

        expect(rollResult.finalResult).toBeGreaterThan(0);
        expect(rollResult.finalResult).toBeLessThanOrEqual(20);
        

        expect(rollResult.rolls).toHaveLength(2);
        expect(rollResult.rolls).toContain(rollResult.finalResult);
 
    }); 

    test("...wants to roll a D20 one hundred times and see how many natural 20s they get.", () => {
        let diceResults = [];

        for (let index = 0; index < 100; index++) {
          diceResults.push(rollDice(20));
            
        }

        console.log(diceResults);
        
        expect(diceResults).toContain(20);
        expect(diceResults).toHaveLength(100);
    });

    // In DnD we have these dice;
    // D4, D6, D8, D10, D12, D20, D100

    describe("...wants to roll a variety dice, specifically, they want to roll a ...", () => {

        let diceVarieties = [
            {
                diceSize: 4,
                diceName: "D4"
            },
            {
                diceSize: 6,
                diceName: "D6"
            },
            {
                diceSize: 8,
                diceName: "D8"
            },
            {
                diceSize: 10,
                diceName: "D10"
            },
            {
                diceSize: 12,
                diceName: "D12"
            },
            {
                diceSize: 20,
                diceName: "D20"
            },
            {
                diceSize: 100,
                diceName: "D100"
            }
        ]
        
        test.each(diceVarieties)("$diceName", (diceObj) => {
            let diceResult = rollDice(diceObj.diceSize);
            expect(diceResult).toBeGreaterThan(0);
            expect(diceResult).toBeLessThanOrEqual(diceObj.diceSize);
        });


        // test("D4", () => {
        //     let diceResult = rollDice(4);
        //     expect(diceResult).toBeGreaterThan(0);
        //     expect(diceResult).toBeLessThanOrEqual(4);
        // });

        
        // test("D6", () => {
        //     let diceResult = rollDice();
        //     expect(diceResult).toBeGreaterThan(0);
        //     expect(diceResult).toBeLessThanOrEqual(6);
        // });

        
        // test("D8", () => {
        //     let diceResult = rollDice(8);
        //     expect(diceResult).toBeGreaterThan(0);
        //     expect(diceResult).toBeLessThanOrEqual(8);
        // });

});
 
