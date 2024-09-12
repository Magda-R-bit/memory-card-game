const gameBox = document.querySelector(".game-box");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let timerInterval;
let totalTime = 0;


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
        cards = [...data,...data];
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
        cardElement.innerHTML =`
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
    }, 1000);

}

function stopTimer() {

}

function resetTimer() {

}

function resetMoves() {

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

}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);

}

function checkWinCondition() {

}

function showWinnerIcon() {

}

function gameOver() {

}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;

}

function restart() {

}