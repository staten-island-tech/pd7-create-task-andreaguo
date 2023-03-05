var bar2 = 0

function foo(){
    var bar1; // Local variable
    bar1 = 11;
    bar2 = bar1; // bar2 will be global with same value.
 }
foo();
 console.log(bar2)

 // function ace(index, arr){
//   if (deck[index].name === "Ace") {
//     if (arr < 10) {
//       deck[index].number = 11
//     } else {
//       deck[index].number = 1
//     }
//   } else {
//   }
// }


// function ace(output, arr){
// const prev = (arrA.reduce((a, b) => a + b, 0));
//     console.log(prev);  
//     for(let i = 0; i < arrA.length; i++) {
//       arrA[i]
//     }
//     if (output.name == "Ace" && prev <= 10) {
//         output.number = 11
//       }
//       else {
//     }
//     if (arr > 21 && output.name == "Ace") {
//         output.number = 1
//       } 
//       else {
//     }
// }


  // if (arr > 21) {
  //   console.log("you win!")
  //   document.getElementById("uResults").insertAdjacentHTML(
  //     "afterbegin",
  //     `<h1 class="h1">you win!</h1>`
  //   )
  //   deleteBtns();
  // } else {
    
  // }

      // ace(output, arr);
    // if (arr > 21) {
    //   console.log("loser!")
    //   document.getElementById("uResults").insertAdjacentHTML(
    //     "afterbegin",
    //     `<h1 class="h1">loser!</h1>`
    //   )
    //   deleteBtns();
    // } else {
      
    // }