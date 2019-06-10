function rollDicePlayer1() {
    const playerOneImg = document.querySelector('img.img1'); //Display dice
    const playerOneDice = Math.floor(Math.random() * 6) + 1; //returns a random integer between the specified values. 

    playerOneImg.setAttribute("src", "./img/dice" + playerOneDice + ".png");

    return playerOneDice;
}

function rollDicePlayer2() {
    const playerTwoImg = document.querySelector('img.img2'); //Display dice
    const playerTwoDice = Math.floor(Math.random() * 6) + 1; // returns a random integer between the specified values. 

    playerTwoImg.setAttribute("src", "./img/dice" + playerTwoDice + ".png");

    return playerTwoDice;
}

function whoWins() {
    const playerOne = rollDicePlayer1();
    const playerTwo = rollDicePlayer2();
    const header = document.querySelector('h1');
    if (playerOne < playerTwo) {
        header.textContent = "Player Two WINS";
    } else if (playerTwo < playerOne) {
        header.textContent = "Player One WINS";
    } else {
        header.textContent = "Tie Game";
    }
}
whoWins();

const rollTheDiceBtn = document.getElementById('roll');
rollTheDiceBtn.addEventListener('click', whoWins);