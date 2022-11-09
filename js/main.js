/*----- constants -----*/

const player = {
  name: "Hasan",
  amount: 230,
};
const computer = "DEALER";

/*----- app's state (variables) -----*/
let cards = [
  "dA",
  "dQ",
  "dK",
  "dJ",
  "d02",
  "d03",
  "d04",
  "d05",
  "d06",
  "d07",
  "d08",
  "d09",
  "d10",
];
let count = 0;
let compCount = 0;
let randomNum;
let arrayCard = [];
let randomCard;
let randomCard2;
let firstImg = document.createElement("img");
let newImg = document.createElement("img");
let double = false;
let hit = false;

/*----- cached element references -----*/
let playerAmount = document.querySelector(".player-amount");
let hitEl = document.querySelector(".hit");
let doubleEl = document.querySelector(".double");
let standEl = document.querySelector(".stand");
let restartEl = document.querySelector(".reset");
let imgFlipped = document.querySelector(".flipped");
let pEl = document.querySelector(".count-cards");
let pEl2 = document.querySelector(".counting-cards");
let blackImagesEl = document.querySelector(".black-images");
let h2El = document.querySelector(".anouncer");
let h2El2 = document.querySelector(".computer-announcer");
let specialEl = document.querySelector(".special");
let leadEl = document.querySelector(".lead");
let allimagesEl = document.querySelectorAll(".all");

/*----- event listeners -----*/
hitEl.addEventListener("click", hitHandle);
doubleEl.addEventListener("click", doubleHandle);
standEl.addEventListener("click", standHandle);
restartEl.addEventListener("click", restartHandle);

/*----- functions -----*/
function hitHandle() {
  imgFlipped.style.display = "block";
  firstImg.remove();
  newImg.remove();
  randomCard2 = 0;
  randomNum = Math.floor(Math.random() * cards.length);
  randomCard = cards[randomNum];
  arrayCard.push(randomCard);
  imgFlipped.className = `card large flipped ${randomCard}`;
  countCheck();
  hit = true;
  checkingAmount();
}

function doubleHandle() {
  firstImg.style.display = "block";
  newImg.style.display = "block";
  randomNum = Math.floor(Math.random() * cards.length);
  randomCard = cards[randomNum];
  arrayCard.push(randomCard);
  let randomNum2 = Math.floor(Math.random() * cards.length);
  randomCard2 = cards[randomNum2];
  arrayCard.push(randomCard2);
  firstImg.className = `card large flipped ${randomCard}`;
  newImg.className = `card large flipped ${randomCard2}`;
  blackImagesEl.append(firstImg);
  blackImagesEl.append(newImg);
  blackImagesEl.style.display = "flex";
  blackImagesEl.style.justifyContent = "center";
  blackImagesEl.style.flexWrap = "wrap";
  imgFlipped.style.display = "none";
  countCheck();
  double = true;
  checkingAmount();
}
function standHandle() {
  computerTurn();
  winningCheckComp();
  checkingWinner();
  hitEl.disabled = true;
  doubleEl.disabled = true;
  standEl.disabled = true;
}
function restartHandle() {
  count = 0;
  h2El.textContent = "";
  pEl.textContent = "Counting: 0";
  arrayCard = [];
  firstImg.remove();
  newImg.remove();
  imgFlipped.style.display = "block";
  imgFlipped.className = `card large flipped back-blue`;

  hitEl.disabled = false;
  doubleEl.disabled = false;
  standEl.disabled = false;

  h2El2.textContent = "";
  element.textContent = "";
  pEl2.textContent = "";
}

function countCheck() {
  // arrayCard = [randomCard, randomCard2];
  count = 0;
  for (let i = 0; i < arrayCard.length; i++) {
    if (arrayCard[i] === "dA") {
      count += 11;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "dQ") {
      count += 10;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] == "d02") {
      count += 2;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "d03") {
      count += 3;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "d04") {
      count += 4;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "d05") {
      count += 5;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "d06") {
      count += 6;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "d07") {
      count += 7;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "d8") {
      count += 8;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "d09") {
      count += 9;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "d10") {
      count += 10;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "dK") {
      count += 10;
      pEl.textContent = `Counting: ${count}`;
    } else if (arrayCard[i] === "dJ") {
      count += 10;
      pEl.textContent = `Counting: ${count}`;
    }
    winningCheck();
  }
}
// my winning check is not working
function winningCheck() {
  if (count === 21) {
    h2El.textContent = `Congratulation ${player.name} Won!`;
    player.amount = player.amount + 50;
    playerAmount.textContent = `The remaining amount is ${player.amount}`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    standEl.disabled = true;
  } else if (count > 21) {
    h2El.textContent = `You lost the game`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    standEl.disabled = true;
  }
  // return count;
}
function computerTurn() {
  randomNum = Math.floor(Math.random() * cards.length);
  randomCard = cards[randomNum];
  if (randomCard === "dA") {
    compCount += 11;
  } else if (randomCard === "dQ") {
    compCount += 10;
  } else if (randomCard == "d02") {
    compCount += 2;
  } else if (randomCard === "d03") {
    compCount += 3;
  } else if (randomCard === "d04") {
    compCount += 4;
  } else if (randomCard === "d05") {
    compCount += 5;
  } else if (randomCard === "d06") {
    compCount += 6;
  } else if (randomCard === "d07") {
    compCount += 7;
  } else if (randomCard === "d8") {
    compCount += 8;
  } else if (randomCard === "d09") {
    compCount += 9;
  } else if (randomCard === "d10") {
    compCount += 10;
  } else if (randomCard === "dK") {
    compCount += 10;
  } else if (randomCard === "dJ") {
    compCount += 10;
  }
  pEl2.style.fontSize = "22px";
  pEl2.style.color = "white";
  return (pEl2.textContent = `The ${computer} has ${compCount}`);
}

function winningCheckComp() {
  if (compCount === 17) {
    h2El2.textContent = `Congratulation ${computer} Won!`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    standEl.disabled = true;
  } else if (compCount > 17) {
    h2El2.textContent = `You lost the game`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    standEl.disabled = true;
  }
  return compCount;
}
let element = document.createElement("h2");
element.style.textAlign = "center";
element.style.color = "blue";
element.style.marginBottom = "10px";
element.style.fontSize = "27px";

function checkingWinner() {
  if (count > compCount) {
    element.textContent = `${player.name} WINS!`;
    player.amount = player.amount + 50;
    playerAmount.textContent = `The remaining amount is ${player.amount}`;
  } else {
    element.textContent = `${computer} Wins!`;
  }
  leadEl.append(element);
}

function checkingAmount() {
  if (double) {
    player.amount = player.amount - 20;
    playerAmount.textContent = `The remaining amount is ${player.amount}`;
    if (player.amount <= 0) {
      hitEl.disabled = true;
      doubleEl.disabled = true;
      standEl.disabled = true;
      restartEl.disabled = true;
      playerAmount.textContent = `YOU CANNOT PLAY ANYMORE. GO REFUND!`;
    }
  } else if (hit) {
    console.log("I am in hit");
    player.amount = player.amount - 10;
    playerAmount.textContent = `The remaining amount is ${player.amount}`;
    if (player.amount <= 0) {
      hitEl.disabled = true;
      doubleEl.disabled = true;
      standEl.disabled = true;
      restartEl.disabled = true;
      playerAmount.textContent = `YOU CANNOT PLAY ANYMORE. GO REFUND!`;
    }
  }
  hit = false;
  double = false;
}
