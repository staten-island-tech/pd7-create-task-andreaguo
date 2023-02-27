import { cards } from "./array.js";

for (let i = cards.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = cards[i]
  cards[i] = cards[j]
  cards[j] = k
}     // shuffles deck

console.log(cards);
      // logs the deck

function random(min, max) {
  let MIN = Math.floor(min)
  let MAX = Math.ceil(max);
  return Math.floor(Math.random() * (MAX-MIN+1)) + MIN
}     // picks a random card (by index value)

function pickCard(cardValues){
    let index = random(0, cards.length);
    let output = cards[index];
    console.log(output);
    createCard(index);
    cards.splice(index, 1);
    cardValues.push(output.number);
    console.log(cardValues);

    const sum = cardValues.reduce((a, b) => a + b, 0);
    console.log(sum);

    if (sum > 21) {
      console.log("loser!")
      document.getElementById("uResults").insertAdjacentHTML(
        "afterbegin",
        `<h1 class="h1">loser!</h1>`
      )
      deleteBtns();
    } else {
      
    }
}

function pickCardD(cardValuesD){
  let index = random(0, cards.length);
  let output = cards[index];
  console.log(output);
  createCardD(index);
  cards.splice(index, 1);
  cardValuesD.push(output.number);
  console.log(cardValuesD);

  const sum = cardValuesD.reduce((a, b) => a + b, 0);
  console.log(sum);

  if (sum > 21) {
    console.log("you win!")
    document.getElementById("uResults").insertAdjacentHTML(
      "afterbegin",
      `<h1 class="h1">you win!</h1>`
    )
    deleteBtns();
  } else {
    
  }
}

function startGame(){
  document.getElementById("user").insertAdjacentHTML(
    "afterbegin",
    `<div id="display">
    <h1 class="h1">User's cards</h1>
    </div>`
  )
}

function createCard(Index){
  document.getElementById("display").insertAdjacentHTML(
      "beforeend",
      `<div class="allUserCards">
      <div class="userCard">
      <h1>${cards[Index].name}</h1>
      <h1>${cards[Index].symbol}</h1>
      </div>
      </div>`
)}

function createCardD(Index){
  document.getElementById("dealer").insertAdjacentHTML(
      "beforeend",
      `<div class="allDealerCards">
      <div class="dealerCard">
      <h1>${cards[Index].name}</h1>
      <h1>${cards[Index].symbol}</h1>
      </div>
      </div>`
)}

function buttons(){
  document.getElementById("user").insertAdjacentHTML(
    "beforeend",
    `<button id="hitBtn">hit</button>
    <button id="standBtn">stand</button>`
  )
document.getElementById("hitBtn").addEventListener("click", function(){
  let n = cards.length
  console.log(n)
  pickCard(cardValues)
})
document.getElementById("standBtn").addEventListener("click", function(){
  deleteBtns();
  document.getElementById("dealer").insertAdjacentHTML(
    "afterbegin",
    `<div id="display">
    <h1 class="h1">Dealer's cards</h1>
    </div>`
  )
  const cardValuesD = [];
  pickCardD(cardValuesD);

})
}

function deleteBtns(){
  document.getElementById("hitBtn").remove();
  document.getElementById("standBtn").remove();
}

const cardValues = []; 
document.getElementById("yesBtn").addEventListener("click", function(){
  startGame();
  document.getElementById("start").remove();
  console.log(cardValues);
  pickCard(cardValues);
  buttons();

})