import { cards } from "../array.js";

let newCards = []

function random(min, max) {
    let min = Math.floor(min)
    let max = Math.ceil(max);
    return Math.floor(Math.random() * (max-min+1)) + min
}
cards.sort((a,b) => 0.5 - Math.random())

for (i = cards.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    cards[i] = cards[j]
    cards[j] = k
  }
console.log(cards)