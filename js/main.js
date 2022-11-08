// questions: 1. restart button when i click the second image is being removed
// 2. double when i click the first time is giving 2 imges bt the rest gives me one item
// 3. wh
// 4. Ace it appears first time is 11 the rest 1.. how to do that
// 5. when i click the hit first and then double the second image is not showing

/*----- constants -----*/
const player = "hasan";
const computer = "dealer";

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
console.log(randomNum);

/*----- cached element references -----*/

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
  randomNum = Math.floor(Math.random() * cards.length);
  randomCard = cards[randomNum];
  imgFlipped.className = `card large flipped ${randomCard}`;
  countCheck();
}

function doubleHandle() {
  randomNum = Math.floor(Math.random() * cards.length);
  randomCard = cards[randomNum];
  arrayCard.push(randomCard);
  let newImg = document.createElement("img");
  let randomNum2 = Math.floor(Math.random() * cards.length);
  randomCard2 = cards[randomNum2];
  arrayCard.push(randomCard2);
  imgFlipped.className = `card large flipped ${arrayCard[0]}`;
  newImg.className = `card large flipped ${arrayCard[1]}`;
  blackImagesEl.append(newImg);
  blackImagesEl.style.display = "flex";
  blackImagesEl.style.justifyContent = "center";
  blackImagesEl.style.flexWrap = "wrap";
  countCheck();
}
function standHandle() {
  computerTurn();
  checkingWinner();
}
function restartHandle() {
  h2El.textContent = "";
  pEl.textContent = "Counting: 0";
  imgFlipped.className = `card large flipped back-blue`;
  hitEl.disabled = false;
  doubleEl.disabled = false;
  standEl.disabled = false;
  count = 0;
}

function countCheck() {
  arrayCard = [randomCard, randomCard2];
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
    h2El.textContent = `Congratulation ${player} Won!`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    // standEl.disabled = true;
  } else if (count > 21) {
    h2El.textContent = `You lost the game`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    // standEl.disabled = true;
  }
  return count;
}
function computerTurn() {
  randomNum = Math.floor(Math.random() * cards.length);
  randomCard = cards[randomNum];
  if (randomCard === "dA") {
    compCount += 11;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "dQ") {
    compCount += 10;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard == "d02") {
    compCount += 2;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "d03") {
    compCount += 3;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "d04") {
    compCount += 4;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "d05") {
    compCount += 5;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "d06") {
    compCount += 6;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "d07") {
    compCount += 7;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "d8") {
    compCount += 8;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "d09") {
    compCount += 9;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "d10") {
    compCount += 10;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "dK") {
    compCount += 10;
    pEl2.textContent = `Counting: ${compCount}`;
  } else if (randomCard === "dJ") {
    compCount += 10;
    pEl2.textContent = `Counting: ${compCount}`;
  }
}

function winningCheckComp() {
  if (compCount === 17) {
    h2El2.textContent = `Congratulation ${computer} Won!`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    standEl.disabled = true;
  } else if (compCount > 21) {
    h2El2.textContent = `You lost the game`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    standEl.disabled = true;
  }
  return compCount;
}

function checkingWinner() {
  let element = document.createElement("h2");
  if (count > compCount) {
    element.textContent = `Player WINS!`;
  } else {
    element.textContent = `Computer Wins!`;
  }
  leadEl.append(element);
}
