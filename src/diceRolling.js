require('dotenv').config();

console.log("Current node Environment is: \n" + process.env.NODE_ENV);
console.log("Cool message is: \n" + process.env.COOL_MESSAGE);

function rollDice(diceSize = 6) {

    // Math.floor always rounds down, so diceSize of 6 would be 0-5
    // Add 1 to guarantee that it stays within sensible range, 
    // eg. diceSize of 6 means possible results are 1-6 
    let diceTotal = Math.floor(Math.random() * diceSize) + 1;
    
    return diceTotal
}


function rollDiceWithDisadvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    // Twice, because we are rolling a die twice
    result.rolls = [rollDice(diceSize), rollDice(diceSize)];

    // Copy result.rolls into new array and only exists for 
    // Math.min to analyse. Get minimum number
    result.finalResult = Math.min(...result.rolls);

    return result;
}

function rollDiceWithAdvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    // Twice, because we are rolling a die twice
    result.rolls = [rollDice(diceSize), rollDice(diceSize)];

    // Copy result.rolls into new array and only exists for 
    // Math.min to analyse. Get minimum number
    result.finalResult = Math.max(...result.rolls);

    return result;
}

module.exports = {
    rollDice,
    rollDiceWithDisadvantage,
    rollDiceWithAdvantage
}


