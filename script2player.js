
// two players version
const rollDiceBtn = document.getElementById(`rollDiceBtn`);
const holdDiceBtn = document.getElementById(`holdDiceBtn`);
const startBtn = document.getElementById(`startBtn`);
const diceNum = document.getElementById(`diceNum`);
let scoreNum = document.getElementById(`scoreNum`);
const heading = document.getElementById(`heading`);
const dices = document.getElementsByClassName(`dices`);
const player1Title = document.getElementById(`player1Title`);
const player2Title = document.getElementById(`player2Title`);
const P1Score = document.getElementById(`score1`);
const P2Score = document.getElementById(`score2`);
const rollSpin = document.getElementById(`rollSpin`);
let rollsound = new Audio("sound/roll2.wav"); 
let alertSound = new Audio("sound/alert.wav");
let victory = new Audio("sound/Victory.mp3");
let score = 0
let score2 = 0;
let score1 = 0;

let P1Turn = false
let P2Turn = false


// ---------- starts and restarts game ----------
startBtn.addEventListener(`click`, () =>{
    startBtn.textContent = `Restart`
    holdDiceBtn.style.visibility = `hidden`
    heading.style.visibility = `visible`
    diceNum.style.visibility = `hidden`;
    rollDiceBtn.style.visibility = `visible`;
    score = 0;
    scoreNum.textContent = `Score: ${score}`; 
    dices[0].style.display = `block`;
    dices[0].style.visibility = `hidden`;         
    dices[1].style.display = `none`;
    dices[2].style.display = `none`;
    dices[3].style.display = `none`;
    dices[4].style.display = `none`;
    dices[5].style.display = `none`; 
    

    // player 1 turn first
    score1 = 0;
    player1Title.style.visibility = `visible`;
    player1Title.style.webkitTextStroke = `2px #ffc857`;
    P1Score.style.visibility =`visible`;
    P1Turn = true
    P1Score.textContent = `0`
    // clears player 2
    P2Turn = false 
    score2 = 0;
    player2Title.style.visibility = `visible`;
    player2Title.style.webkitTextStroke = ``;
    P2Score.style.visibility =`visible`;
    P2Score.textContent = `0`
   
    
});


// ---------- roll button ----------
rollDiceBtn.addEventListener(`click`, () =>{
    let diceRoll = Math.ceil(Math.random() * 6);
    diceNum.style.visibility = `visible`;
    rollsound.pause();
    rollsound.currentTime = 0;
    rollsound.play();

    holdDiceBtn.style.visibility = `visible`; 

    rollDiceBtn.classList.remove('done');
    void rollDiceBtn.offsetWidth;
    rollDiceBtn.classList.add("done");

    rollSpin.classList.remove(`spinner`);
    void rollSpin.offsetWidth;
    rollSpin.classList.add(`spinner`);
   
    // if roll is hgiher than 1
    let highRoll = function(){
        if(P1Turn == true && P2Turn == false){
            diceNum.textContent = `Player 1 rolled a ${diceRoll}`
            score = score + diceRoll;
            // score1 = score1 + diceRoll;
            console.log(score);
            console.log(`rolled a ${diceRoll}`);
            scoreNum.textContent = `P1 Score: ${score}`;
            // P1Score.textContent = `${score1}`;
        }
        else if (P2Turn == true && P1Turn == false){
            diceNum.textContent = `Player 2 rolled a ${diceRoll}`
            score = score + diceRoll;
            // score2 = score2 + diceRoll;
            console.log(score);
            console.log(`rolled a ${diceRoll}`);
            scoreNum.textContent = `P2 Score: ${score}`;
            // P2Score.textContent = `${score2}`;   
        }
             
    };
    console.log(diceRoll);

    switch (diceRoll) {
        case 1:
            // plays alert if one is rolled
            alertSound.pause();
            alertSound.currentTime = 0;
            alertSound.play();
            score = 0;
            scoreNum.textContent = `P2 Score: ${score}`;
            holdDiceBtn.style.visibility = `hidden`;             
            console.log(`rolled a ${diceRoll}`);
            if(P1Turn == true && P2Turn == false){
                P1Turn = false
                P2Turn = true
                player1Title.style.webkitTextStroke = ``;
                player2Title.style.webkitTextStroke = `2px #ffc857`;
                diceNum.textContent = `Player 1 rolled a ${diceRoll}`;
            }
            else if(P2Turn == true && P1Turn == false){
                P2Turn = false
                P1Turn = true
                player2Title.style.webkitTextStroke = ``;
                player1Title.style.webkitTextStroke = `2px #ffc857`;
                diceNum.textContent = `Player 2 rolled a ${diceRoll}`;
            }
            // rollDiceBtn.style.visibility = `hidden`;
            // heading.style.visibility = `visible`;
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
     // if players dice score is 20 or more
     if (score1 >= 20 && score2 < 20){
        scoreNum.textContent = `Player 1 wins with Score: ${score1}`;
        rollDiceBtn.style.visibility = `hidden`;
        startBtn.textContent = `New Game`;
        holdDiceBtn.style.visibility = `hidden`; 
        victory.pause();
        victory.currentTime = 0;
        victory.play();
    }
    else if (score2 >= 20 && score1 < 20){
        scoreNum.textContent = `Player 2 wins with Score: ${score2}`;
        rollDiceBtn.style.visibility = `hidden`;
        startBtn.textContent = `New Game`;
        holdDiceBtn.style.visibility = `hidden`;
        victory.pause();
        victory.currentTime = 0;
        victory.play();
    }
    else if (score >= 20 && P1Turn == true && P2Turn == false && score1 < 20){
        score1 = score1 + score
        P1Score.textContent = `${score1}`
        scoreNum.textContent = `Player 1 wins with Score: ${score1}`;
        rollDiceBtn.style.visibility = `hidden`;
        startBtn.textContent = `New Game`;
        holdDiceBtn.style.visibility = `hidden`; 
        victory.pause();
        victory.currentTime = 0;
        victory.play();
    }
    else if (score >= 20 && P2Turn == true && P1Turn == false && score2 < 20){
        score2 = score2 + score
        P2Score.textContent = `${score2}`
        scoreNum.textContent = `Player 2 wins with Score: ${score2}`;
        rollDiceBtn.style.visibility = `hidden`;
        startBtn.textContent = `New Game`;
        holdDiceBtn.style.visibility = `hidden`;
        victory.pause();
        victory.currentTime = 0;
        victory.play();
    }
}
);


holdDiceBtn.addEventListener(`click`, ()=>{
    diceNum.style.visibility = `hidden`;
    dices[0].style.display = `block`;
    dices[0].style.visibility = `hidden`;         
    dices[1].style.display = `none`;
    dices[2].style.display = `none`;
    dices[3].style.display = `none`;
    dices[4].style.display = `none`;
    dices[5].style.display = `none`;

    // if player 1 turn and below 20 scores
    if(P1Turn == true && P2Turn == false && score1 + score < 20){
        score1 = score + score1
        P1Score.textContent = `${score1}`
        P1Turn = false
        P2Turn = true
        holdDiceBtn.style.visibility = `hidden`
        player2Title.style.webkitTextStroke = `2px #ffc857`;
        player1Title.style.webkitTextStroke = ``;
        score = 0
        scoreNum.textContent = `P1 Score: ${score}`;
       }
    // if player 2 turn and below 20 scores
    else if(P2Turn == true && P1Turn == false && score2 + score < 20){
        score2 = score + score2
        P2Score.textContent = `${score2}`
        P1Turn = true
        P2Turn = false
        holdDiceBtn.style.visibility = `hidden`
        player1Title.style.webkitTextStroke = `2px #ffc857`;
        player2Title.style.webkitTextStroke = ``;
        score = 0
        scoreNum.textContent = `P2 Score: ${score}`;
    }
    // if player 1 turn and 20 or above scores
    else if(P1Turn == true && score + score1 >= 20){
        score1 = score1 + score
        P1Score.textContent = `${score1}`
        scoreNum.textContent = `Player 1 wins with Score: ${score1}`;
        rollDiceBtn.style.visibility = `hidden`;
        startBtn.textContent = `New Game`;
        holdDiceBtn.style.visibility = `hidden`;
        victory.pause();
        victory.currentTime = 0;
        victory.play(); 
    }
    // if player 2 turn and 20 or above scores
    else if(P2Turn == true && score + score2 >= 20){
        score2 = score2 + score
        P2Score.textContent = `${score2}`
        scoreNum.textContent = `Player 2 wins with Score: ${score2}`;
        rollDiceBtn.style.visibility = `hidden`;
        startBtn.textContent = `New Game`;
        holdDiceBtn.style.visibility = `hidden`;
        victory.pause();
        victory.currentTime = 0;
        victory.play();
    }


});