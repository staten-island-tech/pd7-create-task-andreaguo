const URL = "http://deckofcardsapi.com/api/deck/new/draw/?count=52"
const arrA = []
const arrB = []
let sumA = {}
let sumB ={}

async function getData(URL, arrA, arrB){
  try {
      const response = await fetch(URL);
      if (response.status < 200  || response.status >299) {
          console.log(response.status);
          throw error(response);
        } else {
          const data = await response.json();
          const deck = Array.from(data.cards);
          shuffle(deck)
          console.log(deck)
          document.getElementById("yesBtn").addEventListener("click", function(){
            document.getElementById("start").remove();
            startGame(deck, arrA, arrB)
            buttons(deck)
          })
          // playGame(total, deck, arrA);
        }    
  } catch (error) {
      console.log(error);
  }
}
getData(URL);

function playGame(deck, arrA){
  document.getElementById("yesBtn").addEventListener("click", function(){
  setTimeout(() => {
    console.log(arrA, deck);
    pickCard(arrA, deck);
    buttons(deck);
  }, 500);
})
}

function shuffle(deck){
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = deck[i]
  deck[i] = deck[j]
  deck[j] = k
}}   // shuffles deck


function random(min, max) {
  let MIN = Math.floor(min)
  let MAX = Math.ceil(max);
  return Math.floor(Math.random() * (MAX-MIN+1)) + MIN
}     // picks a random card (by index value)

function startGame(deck, arrA, arrB){
  document.getElementById("user").insertAdjacentHTML(
    "afterbegin",
    `<div id="display">
    <h1 class="h1">User's deck</h1>
    </div>`
  )
    document.getElementById("dealer").insertAdjacentHTML(
    "afterbegin",
    `<div id="display">
    <h1 class="h1">Dealer's deck</h1>
    </div>`
  )
  chooseCard(deck, arrA, "arrA")
  chooseCard(deck, arrB, "arrB")

}

function chooseCard(deck, arr, string){
    let i = random(0, deck.length); //good
    let output = deck[i]; //good
    console.log(output); //good
    createCard(output, string, arr); //good
    deck.splice(i, 1); //good
    find(output.value, string)
}

function find(a, arrArr){
  if (a === "ACE" || a ==="JACK") {
    a = 11
  } else {
    if (a === "QUEEN") {
      a = 12
    } else {
      if (a === "KING") {
        a = 13
      } else {
        let x = parseInt(a) 
        a = x     
      }
    }  
  }
  console.log(a)
  if (arrArr === "arrB") {
    arrB.push(a);
    console.log(arrB)
    sumB = arrB.reduce((a, b) => a + b, 0);
    console.log(sumB);
  } else {
    arrA.push(a)
    console.log(arrA)
    sumA = arrA.reduce((a, b) => a + b, 0);
    console.log(sumA);
  }
}




function createCard(output, arr){
  if (arr == "arrB") {
    document.getElementById("dealer").insertAdjacentHTML(
      "beforeend",
      `<div class="allUserdeck">
      <div class="userCard">
      <img class="img" src="${output.image}" alt="${output.value}, ${output.suit}">
      </div>
      </div>`
  )} else {
      document.getElementById("display").insertAdjacentHTML(
      "beforeend",
      `<div class="allUserdeck">
      <div class="userCard">
      <img class="img" src="${output.image}" alt="${output.value}, ${output.suit}">
      </div>
      </div>`
  )}
}

function buttons(deck){
  document.getElementById("user").insertAdjacentHTML(
    "beforeend",
    `<button id="hitBtn">hit</button>
    <button id="standBtn">stand</button>`
  )
 
  document.getElementById("hitBtn").addEventListener("click", function(){
    chooseCard(deck, arrA, "arrA")
     if (sumA > 21) {
      console.log("you lose")
      deleteBtns();
    }
  })
  document.getElementById("standBtn").addEventListener("click", function(){
    console.log(sumB)
    chooseCard(deck, arrB, "arrB")
    if (sumB < 21) {
      while (sumB < 15){
          console.log("time")
          chooseCard(deck, arrB, "arrB")        
    }
  }
  results();
  })
}


function deleteBtns(){
  document.getElementById("hitBtn").remove();
  document.getElementById("standBtn").remove();
}

function results(){
  if (sumA == 21 && sumB == 21) {
  console.log("tie")
} else {
  if (sumA > 21 && sumB > 21) {
    console.log("tie")
  } else {
    if (sumA <= 21 && sumB > 21 ) {
      console.log("you win")
    } else {
      if (21 - sumA == 21 - sumB) {
        console.log("tie")
      } else {
        if (21 - sumA > 21 - sumB) {
          console.log("you lose")
        } else {
          console.log("you win")
        }
          

      }
    }
  } 
} deleteBtns();
}