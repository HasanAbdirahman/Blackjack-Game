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
let randomNum;
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
let blackImagesEl = document.querySelector(".black-images");
let h2El = document.querySelector(".anouncer");

/*----- event listeners -----*/
hitEl.addEventListener("click", hitHandle);
doubleEl.addEventListener("click", doubleHandle);
standEl.addEventListener("click", standHandle);
restartEl.addEventListener("click", restartHandle);

/*----- functions -----*/
function hitHandle() {
  randomNum = Math.floor(Math.random() * cards.length);
  console.log(randomNum);
  randomCard = cards[randomNum];
  imgFlipped.className = `card large flipped ${randomCard}`;
  countCheck();
}

function doubleHandle() {
  imgFlipped.className = `card large flipped back-blue`;
  randomNum = Math.floor(Math.random() * cards.length);
  console.log(randomNum);
  randomCard = cards[randomNum];
  let newImg = document.createElement("img");
  let randomNum2 = Math.floor(Math.random() * cards.length);
  randomCard2 = cards[randomNum2];
  imgFlipped.className = `card large flipped ${randomCard}`;
  newImg.className = `card large flipped ${randomCard2}`;
  blackImagesEl.append(newImg);
  blackImagesEl.style.display = "flex";
  blackImagesEl.style.justifyContent = "center";
  blackImagesEl.style.flexWrap = "wrap";
  countCheck();
  return "";
}
function standHandle() {
  computerTurn();
}
function restartHandle() {
  // The double is the problem-the second element
  imgFlipped.className = `card large flipped back-blue`;
  randomCard2 = "";
  countCheck();
  hitEl.disabled = false;
  doubleEl.disabled = false;
  standEl.disabled = false;
  pEl.textContent = "Counting: 0";
  count = 0;
  h2El.textContent = "";
}

function countCheck() {
  //   Ace it appears first time is 11 the rest 1.. how to do that

  if (randomCard === "dA") {
    count += 11;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "dQ") {
    count += 10;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard == "d02") {
    count += 2;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "d03") {
    count += 3;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "d04") {
    count += 4;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "d05") {
    count += 5;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "d06") {
    count += 6;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "d07") {
    count += 7;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "d8") {
    count += 8;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "d09") {
    count += 9;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "d10") {
    count += 10;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "dK") {
    count += 10;
    pEl.textContent = `Counting: ${count}`;
  } else if (randomCard === "dJ") {
    count += 10;
    pEl.textContent = `Counting: ${count}`;
  }
  winningCheck();
}
// my winning check is not working
function winningCheck() {
  if (count === 21) {
    h2El.textContent = `Congratulation ${player} Won!`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    standEl.disabled = true;
  } else if (count > 21) {
    h2El.textContent = `You lost the game`;
    hitEl.disabled = true;
    doubleEl.disabled = true;
    standEl.disabled = true;
  }
  return count;
}
function computerTurn() {
  countCheck();
  checkingTurn();
}
