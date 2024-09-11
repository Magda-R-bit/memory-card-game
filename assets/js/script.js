const gameBox = document.querySelector(".game-box");
let cards = [];
//let firstCard, secondCard;
//let lockBoard = false;




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
        gameBox.appendChild(cardElement);
        
    }

}

function flipCards() {

}

function startTimer() {

}

function stopTimer() {

}

function resetTimer() {

}

function resetMoves() {

}

function checkForMatch() {

}

function disableCards() {

}

function unflipCards() {

}

function checkWinCondition() {

}

function showWinnerIcon() {

}

function gameOver() {

}

function resetBoard() {

}

function restart() {

}