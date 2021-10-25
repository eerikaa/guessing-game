/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

let button = document.querySelector("#button");
let restart = document.querySelector("#restart");
let textField = document.querySelector("#textField");
let msg = document.querySelector("msg");
button.addEventListener("click", onSubmit);
restart.addEventListener("click", start);
start();
function start() {
  random();
}
function onSubmit(e) {
  let value = textField.value;
  let numToCompare = random();
  if (val == numToCompare.toString()) {
    msg.textContent = "Congratulations!";
  } else {
    msg.textContent = "Boo Hiss!";
    console.log(val);
    console.log(numToCompare);
  }
}
function random() {
  let num = Math.random() * 100;
  let finalNum = Math.ceil(num);
  return finalNum;
}
