
'use strict';

const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const playerActive0 = document.querySelector(".player--0")
const playerActive1 = document.querySelector(".player--1")
const currentScore0EL = document.getElementById("current--0")
const currentScore1EL = document.getElementById("current--1");
const diceEL =   document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold= document.querySelector(".btn--hold");
// const newGame = document.querySelector(".btn--new");


let currentScore,activePlayer, scores;
let player = true


const refreshGame = function(){
     currentScore = 0;
     activePlayer = 0;
     scores = [0, 0];
     player = true;
    

     score0EL.textContent = 0;
     score1EL.textContent = 0;
     currentScore0EL.textContent = 0;
     currentScore1EL.textContent = 0;

     playerActive0.classList.add("player--active")
     playerActive1.classList.remove("player--active")
     playerActive0.classList.remove("player--winner")
     playerActive1.classList.remove("player--winner")
     diceEL.classList.add("hidden");
}

refreshGame()


const switchPlayer = function(){
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        playerActive0.classList.toggle("player--active")
        playerActive1.classList.toggle("player--active")
        
}


    btnRoll.addEventListener("click", function(){
        if(player){
            //1. get a random number
            const rolledNumber = Math.trunc(Math.random() * 6) + 1

            //2, display the dice
           diceEL.classList.remove("hidden")
           diceEL.src = `dice-${rolledNumber}.png`
    
           //3. check if he dice is not equals to 1
           if(rolledNumber !== 1 ){
            currentScore += rolledNumber
           document.getElementById(`current--${activePlayer}`).textContent = currentScore
           }else {
            switchPlayer()
           }
        }
   

    })


        
btnHold.addEventListener("click", function(){
    if(player){
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        
        if (scores[activePlayer] >= 20){
            
            player = false;
            diceEL.classList.add("hidden")
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
            
        }else {
            switchPlayer()
        }
    }
   
})


btnNew.addEventListener("click", refreshGame)