"use strict";
const playersScore = [0, 0];
const playersCurrentScore = [0, 0];
let turnPlayer = 0;

const elPlayers = document.querySelectorAll(".player");

const elCurrentScores = document.querySelectorAll(".current-score");

const elScores = document.querySelectorAll(".score");
const elScore0 = document.querySelector("#score--0");
const elScore1 = document.querySelector("#score--1");

const elDice = document.querySelector(".dice");

const btns = document.querySelectorAll(".btn");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// - C H A N G E  G A M E

// - M O D I F Y  S T Y L E S

const changeStylePlayerActive = () => {
    /*
    let classList;

    elPlayers[turnPlayer].classList += " player--active" + turnPlayer;

    // classList = elPlayers[turnPlayer ? 0 : 1].classList.split(" ").length = 2;
    let datos = [...(elPlayers[turnPlayer ? 0 : 1].classList)];

    datos.length = 2;
    elPlayers[turnPlayer ? 0 : 1].classList = datos.join(" ");

    */
    elPlayers[turnPlayer].classList.add(`player--active${turnPlayer ? "1" : "0"}`);
    elPlayers[turnPlayer ? 0 : 1].classList.remove(`player--active${turnPlayer ? "0" : "1"}`);

    // contains, toggle

    // √ indicative--player (activar indicativo por jugador activo)
};

// √ (changeStylePlayerWinner) - mostrar jugador ganador [player--winner1, player--winner0] (174 & 179)

// √ (winPlayer) - bloquer uso de botones



// - L O G I C  G A M E
const playerChangeActive = function () {
    turnPlayer = turnPlayer ? 0 : 1;
    changeStylePlayerActive();
};

const rollDice = function () {
    let diceNumber = Math.floor(Math.random() * 6) + 1;

    if (elDice.style.display === "none") elDice.style.display = "block";

    elDice.setAttribute("src", `dice-${diceNumber}.png`);
    // elDice.src = `dice-${diceNumber}.png`;

    if (diceNumber === 1) {
        playersCurrentScore[turnPlayer] = 0;
        elCurrentScores[turnPlayer].textContent = 0;
        playerChangeActive();
    } else {
        playersCurrentScore[turnPlayer] += diceNumber;
        elCurrentScores[turnPlayer].textContent = playersCurrentScore[turnPlayer];
    }
};

const holdCurrent = function () {
    playersScore[turnPlayer] += playersCurrentScore[turnPlayer];
    playersCurrentScore[turnPlayer] = 0;
    elCurrentScores[turnPlayer].textContent = "0";
    elScores[turnPlayer].textContent = playersScore[turnPlayer];

    playerChangeActive();
};

const resetGame = function () {
    playersScore.forEach((playerScore, i) => {
        playerScore = 0;

        playersCurrentScore[i] = 0;
        elCurrentScores[i].textContent = "0";
        elScores[i].textContent = "0";
    });

    elDice.style.display = "none";

    turnPlayer = Math.floor(Math.random() * 2);

    btnRoll.addEventListener("click", rollDice);
    btnHold.addEventListener("click", holdCurrent);

    changeStylePlayerActive();
};

resetGame();

btnNew.addEventListener("click", resetGame);

