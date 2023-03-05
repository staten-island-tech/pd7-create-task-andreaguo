const URL = "http://deckofcardsapi.com/api/deck/new/draw/?count=52"
const sumA = []
const sumB = []

async function getData(URL, sumA, sumB){
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
            startGame(deck, sumA, sumB)
            
          })
          // playGame(total, deck, sumA);
        }    
  } catch (error) {
      console.log(error);
  }
}
getData(URL);

function playGame(deck, sumA){
  document.getElementById("yesBtn").addEventListener("click", function(){
  setTimeout(() => {
    console.log(sumA, deck);
    pickCard(sumA, deck);
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

function startGame(deck, sumA, sumB){
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
  chooseCard(deck, sumA, "sumA")
  chooseCard(deck, sumB, "sumB")

}

function chooseCard(deck, sum, string){
    let i = random(0, deck.length);
    let output = deck[i];
    let value = parseInt(output.value)
    console.log(output);
    createCard(output, string);
    deck.splice(i, 1);
    find(value);
    console.log(value)
    const x = sum.push(value);
    console.log(x);
    const SUM = sum.reduce((a, b) => a + b, 0);
    console.log(SUM);

    // ace(output, sum);
    // if (sum > 21) {
    //   console.log("loser!")
    //   document.getElementById("uResults").insertAdjacentHTML(
    //     "afterbegin",
    //     `<h1 class="h1">loser!</h1>`
    //   )
    //   deleteBtns();
    // } else {
      
    // }
}

function find(a){
  if (a === "ACE" || a ==="JACK") {
    a = 11
  } else {
    if (a === "QUEEN") {
      a = 12
    } else {
      if (a === "KING") {
        a = 13
      } else {
        a = a
      }
    }  
  }
}

const arr = []
const newarr = arr.push("hello", 2, 30, 4, 4 ,4)
console.log(newarr)
// function ace(output, sum){
// const prev = (sumA.reduce((a, b) => a + b, 0));
//     console.log(prev);  
//     for(let i = 0; i < sumA.length; i++) {
//       sumA[i]
//     }
//     if (output.name == "Ace" && prev <= 10) {
//         output.number = 11
//       }
//       else {
//     }
//     if (sum > 21 && output.name == "Ace") {
//         output.number = 1
//       } 
//       else {
//     }
// }


  // if (sum > 21) {
  //   console.log("you win!")
  //   document.getElementById("uResults").insertAdjacentHTML(
  //     "afterbegin",
  //     `<h1 class="h1">you win!</h1>`
  //   )
  //   deleteBtns();
  // } else {
    
  // }




function createCard(output, sum){
  if (sum == "sumB") {
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
  let n = deck.length
  console.log(n)
  pickCard(cardValues)
})
document.getElementById("standBtn").addEventListener("click", function(){
  deleteBtns();
  pickCardD(sumB);   

})
}

function dealerfunction (){
  setTimeout(() => {
    
    pickCardD(sumB);
  }, 1000)  
}

function deleteBtns(){
  document.getElementById("hitBtn").remove();
  document.getElementById("standBtn").remove();
}

// function ace(index, sum){
//   if (deck[index].name === "Ace") {
//     if (sum < 10) {
//       deck[index].number = 11
//     } else {
//       deck[index].number = 1
//     }
//   } else {
//   }
// }
