

const rollDiceBtn = document.getElementById(`rollDiceBtn`);
const startBtn = document.getElementById(`startBtn`);
const diceNum = document.getElementById(`diceNum`);
let scoreNum = document.getElementById(`scoreNum`);
const heading = document.getElementById(`heading`);
const dices = document.getElementsByClassName(`dices`);
let rollsound = new Audio("sound/roll2.wav"); 
let score = 0;


// ---------- starts and restarts game ----------
startBtn.addEventListener(`click`, () =>{
        startBtn.textContent = `Restart`
        diceNum.style.visibility = `hidden`;
        rollDiceBtn.style.visibility = `visible`;
        score = 0;
        scoreNum.textContent = `Score: ${score}`; 
        heading.style.visibility = `hidden`;
        dices[0].style.display = `block`;
        dices[0].style.visibility = `hidden`;         
        dices[1].style.display = `none`;
        dices[2].style.display = `none`;
        dices[3].style.display = `none`;
        dices[4].style.display = `none`;
        dices[5].style.display = `none`;       
});


// ---------- roll button ----------
rollDiceBtn.addEventListener(`click`, (event) =>{
    let diceRoll = Math.ceil(Math.random() * 6);
    diceNum.style.visibility = `visible`;
    rollsound.pause();
    rollsound.currentTime = 0;
    rollsound.play();

    event.target.classList.toggle('done');

    document.getElementsByClassName(`done`);
   
    let highRoll = function(){
        diceNum.textContent = `You rolled a ${diceRoll}`
        score = score + diceRoll;
        console.log(score);
        console.log(`rolled a ${diceRoll}`);
        scoreNum.textContent = `Score: ${score}`;       
    };
    console.log(diceRoll);

    switch (diceRoll) {
        case 1:
            score = 0;
            scoreNum.textContent = `You lost Score: ${score}`;
            diceNum.textContent = `You rolled a ${diceRoll}`;
            console.log(`rolled a ${diceRoll}`);
            console.log("lost");
            rollDiceBtn.style.visibility = `hidden`;
            heading.style.visibility = `visible`;
            dices[0].style.display = `block`
            dices[0].style.visibility = `visible`            
            dices[1].style.display = `none`;
            dices[2].style.display = `none`;
            dices[3].style.display = `none`;
            dices[4].style.display = `none`;
            dices[5].style.display = `none`;                      
            break;
        case 2:
            dices[0].style.display = `none`;
            dices[1].style.display = `block`;
            dices[2].style.display = `none`;
            dices[3].style.display = `none`;
            dices[4].style.display = `none`;
            dices[5].style.display = `none`;
            highRoll();
            break;
        case 3:
            dices[0].style.display = `none`;
            dices[1].style.display = `none`;
            dices[2].style.display = `block`;
            dices[3].style.display = `none`;
            dices[4].style.display = `none`;
            dices[5].style.display = `none`;
            highRoll();                      
            break;
        case 4:
            dices[0].style.display = `none`;
            dices[1].style.display = `none`;
            dices[2].style.display = `none`;
            dices[3].style.display = `block`;
            dices[4].style.display = `none`;
            dices[5].style.display = `none`;
            highRoll();
            break;
        case 5:
            dices[0].style.display = `none`;
            dices[1].style.display = `none`;
            dices[2].style.display = `none`;
            dices[3].style.display = `none`;
            dices[4].style.display = `block`;
            dices[5].style.display = `none`;
            highRoll();     
            break;
        case 6:
            dices[0].style.display = `none`;
            dices[1].style.display = `none`;
            dices[2].style.display = `none`;
            dices[3].style.display = `none`;
            dices[4].style.display = `none`;
            dices[5].style.display = `block`;
            highRoll();
            break;
        
    }
     // if dice score is 20 or more
     if (score >= 20){
        scoreNum.textContent = `You won with a score of ${score}`;
        rollDiceBtn.style.visibility = `hidden`;
        startBtn.textContent = `New Game`;
    }
}
);
