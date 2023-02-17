import { cards } from "./array.js";

for (let i = cards.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = cards[i]
    cards[i] = cards[j]
    cards[j] = k
  }
console.log(cards);

function random(min, max) {
    let MIN = Math.floor(min); //rounds down
    let MAX = Math.ceil(max); //rounds up
    return Math.floor(Math.random() * (MAX-MIN+1)) + MIN
}
let index = random(0, 51)
let card = cards[index];
console.log(card);

if ( card.number >21) {
  console.log("you lost!")
} else {
  console.log("another hit?")
}
