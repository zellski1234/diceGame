

const rollDiceBtn = document.getElementById(`rollDiceBtn`);
const startBtn = document.getElementById(`startBtn`);
const diceNum = document.getElementById(`diceNum`);
let scoreNum = document.getElementById(`scoreNum`);
const heading = document.getElementById(`heading`);

let score = 0;


let rollsound = new Audio("sound/roll2.wav"); 


startBtn.addEventListener(`click`, () =>{
        startBtn.textContent = `Restart`
        rollDiceBtn.style.display = `block`
        score = 0
        scoreNum.textContent = `Score: ${score}`;
        diceNum.textContent = `` 
        heading.style.visibility = `hidden`
        
});


rollDiceBtn.addEventListener(`click`, () =>{

    let diceRoll = Math.ceil(Math.random() * 6);
    rollsound.pause()
    rollsound.currentTime = 0
    rollsound.play();
   

    if(diceRoll > 1 && score < 20){
        diceNum.textContent = `You rolled a ${diceRoll}`
        score = score + diceRoll;
        console.log(score);
        console.log(`rolled a ${diceRoll}`);
        scoreNum.textContent = `Score: ${score}`;
        if (score >= 20){
            scoreNum.textContent = `You won with a score of ${score}`;
            rollDiceBtn.style.display = `none`
            // remove the roll button
        }
    }
    else if (diceRoll == 1) {
        
        score = 0;
        scoreNum.textContent = `You lost Score: ${score}`;
        diceNum.textContent = `You rolled a ${diceRoll}`
        console.log(`rolled a ${diceRoll}`);
        console.log("lost");
        rollDiceBtn.style.display = `none`
        heading.style.visibility = ``        
        // remove the roll button
    }
    
}
);








