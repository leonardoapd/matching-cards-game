//Initialize the counters for wins and losses
var wins = 0;
var losses = 0;

//The elements of the modal are gotten
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

//Function to get the card clicked
function getCardClicked(card) {
    //A number is prepared to be compared to the random number
    let numberOfCard = 0;

    //The number of the card is gotten
    if (card === "king") {
        numberOfCard = 1;
    } else if (card === "queen") {
        numberOfCard = 2;
    } else if (card === "jack") {
        numberOfCard = 3;
    }

    //A random number is gotten
    let randomNumber = getRandomInt(1, 3);

    console.log(`You clicked on ${card}`);

    let computerCard = "";
    if (randomNumber === 1) {
        computerCard = "king";
    } else if (randomNumber === 2) {
        computerCard = "queen";
    } else if (randomNumber === 3) {
        computerCard = "jack";
    }
    console.log(`The computer choose ${computerCard}`);


    //If the number of the card is equal to the random number, the user wins
    if (randomNumber === numberOfCard) {
        wins++;
        console.log("You win!");
        console.log("Wins: " + wins);
        //If the number of the card is equal to the random number, a content is added to the modal to show the user that he won and the score
        modalContent.innerHTML = `
        <h1 class="titles">You win!</h1>
        <div class="flex">
            <img src="images/${computerCard}.png" alt="${card}">
            <div>
                <p>Computer chose ${computerCard}.</p>
                <p class="titles">You matched the cards!!</p>
                <p>You <span class="span-wins score">${wins}</span> vs <span class="span-losses score">${losses}</span>Computer</p>
            </div>
        </div>`;
    } else {
        losses++;
        console.log("You lose!");
        //If the number of the card is not equal to the random number, a content is added to the modal to show the user that he lost and the score
        modalContent.innerHTML = `
        <h1 class="titles">You lose!</h1>
        <div class="flex">
            <img src="images/${computerCard}.png" alt="${card}">
            <div>
                <p>Computer chose ${computerCard}.</p>
                <p class="titles">Keep trying!</p>
                <p>You <span class="span-wins score">${wins}</span> vs  <span class="span-losses score">${losses}</span> Computer</p>
            </div>
        </div>`;
    }

    //The modal is shown
    modal.showModal();
}

//Function to get a random number
function getRandomInt(min, max) {
    //Using Math.random() to get a random number between min and max
    return Math.floor(Math.random() * (max - min)) + min;
}

//Function to close the modal
closeModal.onclick = () => {
    modal.close();
}

//Function to close the modal when the user clicks outside of it listening to the click event
window.onclick = (event) => {
    if (event.target == modal) {
        modal.close();
    }
}

//Function to reset the game
function resetGame() {
    //The counters for wins and losses are reset
    wins = 0;
    losses = 0;

    modalContent.innerHTML = `
    <h1 class="titles">Game reset!</h1>
    <div>
        <p>You <span class="span-wins score">${wins}</span> vs  <span class="span-losses score">${losses}</span> Computer</p>
    </div>`;
    modal.showModal();
}

//Function to show the score
function showScore() {
    modalContent.innerHTML = `
    <h1 class="titles">The score is:</h1>
    <div>
        <p>You <span class="span-wins score">${wins}</span> vs  <span class="span-losses score">${losses}</span> Computer</p>
    </div>`;
    modal.showModal();
}