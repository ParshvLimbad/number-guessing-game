// User Clicks the button
// random number will be generated from 1 to 10
// the generated number should be stored in a variable
// then compare the user input with the generated number
// if user input is not equal to generated number return incorrect
// if user input is equal to generateed number return correct
let userInput;
let btn = document.getElementById("btn")
userInput = document.getElementById("txt-box")
let submit = document.getElementById("submit")
let numberReveal = document.getElementById("num-box").style.display = "none"
let errorBox = document.getElementById("errorBox").style.display = "none"
let generateNum;

function start() {
    generateNum = Math.floor(Math.random() * 10) + 1;
    console.log(generateNum);
    btn.onclick = userInput.style.display = "block"
    userInput = userInput.value
    btn.onclick = submit.style.display = "block"
    btn.onclick = btn.style.display = "none"
}
function afterMath(){
    if(userInput.value !== generateNum){
       console.log("Incorrect")
    } else if (userInput.value == generateNum) {
       console.log("Correct")
    }
}