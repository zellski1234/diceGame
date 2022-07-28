

const rollDiceBtn = document.getElementById(`rollDiceBtn`);
const diceNum = document.getElementById(`diceNum`);
let scoreNum = document.getElementById(`scoreNum`);

let score = 0;



rollDiceBtn.addEventListener(`click`, () =>{

    let diceRoll = Math.ceil(Math.random() * 6);

    if(diceRoll > 1 && score < 20){
        diceNum.textContent = `You rolled a ${diceRoll}`
        score = score + diceRoll;
        console.log(score);
        console.log(`rolled a ${diceRoll}`);
        scoreNum.textContent = `Your Score is ${score}`;
        // if (score >= 20){
        //     scoreNum.textContent = `You won with a score of ${score}`;
        //     // remove the roll button
        // }
    }
    else if (diceRoll == 1) {
        
        score = 0;
        scoreNum.textContent = `Your Score is ${score}`;
        diceNum.textContent = `You rolled a ${diceRoll}`
        console.log(`rolled a ${diceRoll}`);
        console.log("lost");
        
        // remove the roll button
    }
    
}
)








