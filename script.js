

const rollDiceBtn = document.getElementById(`rollDiceBtn`);
const startBtn = document.getElementById(`startBtn`);
const diceNum = document.getElementById(`diceNum`);
let scoreNum = document.getElementById(`scoreNum`);

let score = 0;






startBtn.addEventListener(`click`, () =>{
    
    // if roll button hidden
    if(rollDiceBtn.style.display == `none`){
        startBtn.textContent = `Restart`
        rollDiceBtn.style.display = `block`
        score = 0
        scoreNum.textContent = `Your Score is ${score}`;

    }
    // if roll button visble
    else {
        rollDiceBtn.style.display = `block`
        startBtn.textContent = `Restart`
        score = 0
        scoreNum.textContent = `Your Score is ${score}`;
        diceNum.textContent = ``        
    }
});




rollDiceBtn.addEventListener(`click`, () =>{

    let diceRoll = Math.ceil(Math.random() * 6);

    if(diceRoll > 1 && score < 20){
        diceNum.textContent = `You rolled a ${diceRoll}`
        score = score + diceRoll;
        console.log(score);
        console.log(`rolled a ${diceRoll}`);
        scoreNum.textContent = `Your Score is ${score}`;
        if (score >= 20){
            scoreNum.textContent = `You won with a score of ${score}`;
            rollDiceBtn.style.display = `none`
            // remove the roll button
        }
    }
    else if (diceRoll == 1) {
        
        score = 0;
        scoreNum.textContent = `You lost score: ${score}`;
        diceNum.textContent = `You rolled a ${diceRoll}`
        console.log(`rolled a ${diceRoll}`);
        console.log("lost");
        rollDiceBtn.style.display = `none`
        
        // remove the roll button
    }
    
}
);








