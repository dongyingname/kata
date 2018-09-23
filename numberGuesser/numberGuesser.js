var prompt = require('prompt-sync')();
var num = Math.floor(Math.random() * 1000);
var array = [];
var count = 0;
// code below (replace this example)
for (i = 0;i < 100;i ++){
  var answer = prompt("Guess a number (from 0 to 999); input 'out'(no quotes) to terminate:");
  count ++;
  if (answer < num){
    console.log("Too Low!");
  }
  else if (answer > num){
      console.log("Too High!!");
  }
  else if (answer == num){
    console.log("You got it! " + "You took " + count + " times");
    break;
  }
  else if (answer == 'out'){
    console.log("session terminated!!!")
    break;
  }
  else{
    console.log("Not a number! Try again!");
  }
}