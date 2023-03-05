var bar2 = 0

function foo(){
    var bar1; // Local variable
    bar1 = 11;
    bar2 = bar1; // bar2 will be global with same value.
 }
foo();
 console.log(bar2)