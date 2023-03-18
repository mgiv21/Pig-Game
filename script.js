'use strict'



const playersScore = [0, 0];
const playersCurrentScore = [0, 0];
let playingPlayer = 1;

const elCurrentScores = document.querySelectorAll('.current-score');

const elScores = document.querySelectorAll('.score');
const elScore0 = document.querySelector('#score--0');
const elScore1 = document.querySelector('#score--1');

const elDice = document.querySelector('.dice');

const btns = document.querySelectorAll('.btn');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// C H A N G E  G A M E

// M O D I F Y  S T Y L E S

// L O G I C  G A M E


const rollDice = function() {
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    
    // console.log("pepo sa cagao en el bote colacao");
    
    if (elDice.style.display === "none") elDice.style.display = "block";
    elDice.setAttribute("src", `dice-${diceNumber}.png`);

    if (diceNumber !== 1) {
        playersCurrentScore[playingPlayer - 1] += diceNumber;
        elCurrentScores[playingPlayer - 1].textContent = playersCurrentScore[playingPlayer - 1];
    } else {
        playersCurrentScore[playingPlayer - 1] = 0;
        elCurrentScores[playingPlayer - 1].textContent = playersCurrentScore[playingPlayer - 1];


        // add cambiar jugador
        playingPlayer += 1;

        if (playingPlayer > 2) {
            playingPlayer = 1;
        }
    }
}

function comoTuQuieras(params) {
    
}

const holdCurrent = function() {
    // console.log("pepo guardo sus puntos y fue rico y comió perdices");  
    
    playersScore[playingPlayer - 1] += playersCurrentScore[playingPlayer - 1]
    playersCurrentScore[playingPlayer - 1] = 0;
    elCurrentScores[playingPlayer - 1].textContent = "0";
    elScores[playingPlayer - 1].textContent = playersScore[playingPlayer - 1]

    
    // add cambiar jugador
    playingPlayer += 1;

    if (playingPlayer > 2) {
        playingPlayer = 1;
    }
}

const resetGame = function() {
    playersScore.forEach((playerScore, i) => {
        playerScore = 0
        
        playersCurrentScore[i] = 0;
        elCurrentScores[i].textContent = '0';
        elScores[i].textContent = "0";
    });

    elDice.style.display = "none";
    
    playingPlayer = Math.floor(Math.random() * 2) + 1;

    btnRoll.addEventListener("click", rollDice);
    btnHold.addEventListener("click", holdCurrent);

    // add cambiar jugador
}


btnNew.addEventListener("click", resetGame);