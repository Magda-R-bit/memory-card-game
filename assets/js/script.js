// Rules
let rules = document.getElementById("myRules");
let how = document.getElementById("howButton");
let span = document.getElementsByClassName("close")[0];

// Game
const gameBox = document.querySelector(".game-box");
const recordMoves = document.querySelector(".moves");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let timerInterval;
let totalTime = 0;
let moves = 0;
let timeLimit = 100;

// Open and close functions for the rules icon

how.onclick = function () {
    rules.style.display = "block";
}

span.onclick = function () {
    rules.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == rules) {
        rules.style.display = "none";
    } else if (!rules.contains(event.target) && event.target != how) {
        rules.style.display = "none";
    }
}

/**
 * Loads card data from cards.json file, duplicates it to create pairs, and prepares the game.
 * 
 * This function fetches the card data from ".data/cards.json", creates pairs by duplicating the fetched data, shuffles the cards, and generates them for use in the game.
 * If an error occurs during the fetch operation, an error message is logged to the consol.
 */

function loadCards() {
    fetch("./data/cards.json")
        .then((res) => res.json())
        .then((data) => {
            cards = [...data, ...data];
            shuffleCards();
            generateCards();
        })

        .catch(error => {
            console.error("Error fetching the cards:", error)
        });

}

loadCards()

function shuffleCards() {
    let currentIndex = cards.length;
    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }

}

/**
 * Dynamically loops over the cards array and generates a card element for each card, and adds cards to the game box.
 */
function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
        <div class="front">
        <img class ="front-image" src=${card.image} />
        </div>
        <div class="back"></div>
        `;
        // Append the card element to the game box
        gameBox.appendChild(cardElement);

        // Add event listener to handle the flip action when clicked
        cardElement.addEventListener("click", flipCard);

    }

}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    moves++;
    recordMoves.innerText = `Moves: ${moves}`;

    startTimer();
    checkForMatch();

}

function startTimer() {
    const timerElement = document.querySelector(".timer");
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        totalTime++;
        timerElement.innerText = `Time: ${totalTime} sec`;

        if (totalTime >= timeLimit) {
            gameOver();
        }
    }, 1000);

}

function stopTimer() {
    clearInterval(timerInterval);

}

function resetTimer() {
    stopTimer();
    totalTime = 0;
    document.querySelector(".timer").innerText = `Timer: ${totalTime} sec`;

}

function resetMoves() {
    moves = 0;
    recordMoves.innerText = `Moves: ${moves}`;

}

/**
 * Checks if the two selected cards are a match by comparing their names.
 * 
 * If the cards match, it disables further flipping by removing the click event listeners using the `disableCards` function.
 * If they do not match, the cards are unflipped.
 */
function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();

}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
    checkWinCondition();

}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);

}

/**
 * Checks if player won the game by verifying if all cards are flipped.
 * If all flipped, the function triggers the display of winner icon.
 */
function checkWinCondition() {
    if (!document.querySelector(`.card:not(.flipped)`)) {
        setTimeout(() => {
            showWinnerIcon();
        }, 1000);
    }

}

function showWinnerIcon() {
    const winnerIcon = document.querySelector(".winner-icon");
    winnerIcon.classList.add("flipped");

    winnerIcon.innerHTML = `
    <div class="winner"> 
    Congratulations, You Won!<br />
    with <span class="highlight">${moves}</span> moves<br />
    in <span class="highlight">${totalTime}</span> seconds
    </div>
    `;

    confetti({
        particleCount: 100,
        spread: 70,
        origin: {
            y: 0.6
        }
    });

    clearInterval(timerInterval);

}

/**
 * Triggers the game-over sequence when the player exceeds the time limit of 100s.
 * Displays a message and stop the game timer.
 */
function gameOver() {
    const gameOver = document.querySelector(".game-over");
    gameOver.classList.add("show");
    gameOver.innerHTML = `
    <div class="game-over-message">
       Game Over!<br />
       You exceeded ${timeLimit} seconds.<br />
       Try again!
    </div>
    `;

    stopTimer();

}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;

}

function restart() {
    const winnerIcon = document.querySelector(".winner-icon");
    if (winnerIcon) {
        winnerIcon.classList.remove("flipped");
    }

    const gameOver = document.querySelector(".game-over");
    if (gameOver) {
        gameOver.classList.remove("show");
    }

    resetBoard();
    shuffleCards();
    resetMoves();
    resetTimer();
    gameBox.innerHTML = "";
    generateCards();
}