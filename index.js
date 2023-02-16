import { cards } from "../array.js";

let newCards = []

function random(min, max) {
    let mino = Math.floor(min); //rounds down
    let maxo = Math.ceil(max); //rounds up
    return Math.floor(Math.random() * (maxo-mino+1)) + mino
}
// cards.sort((a,b) => 0.5 - Math.random())
random(0,10);
for (i = cards.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    cards[i] = cards[j]
    cards[j] = k
  }
console.log(cards)