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
let restart = document.getElementById("restart").style.display = "none"
let generateNum;

function start() {
    generateNum = Math.floor(Math.random() * 10) + 1;
    console.log(generateNum);
    btn.onclick = userInput.style.display = "block"
    btn.onclick = submit.style.display = "block"
    btn.onclick = btn.style.display = "none"
}
function afterMath(){
    let userInputValue = parseInt(userInput.value);
    if(userInputValue !== generateNum){
       errorBox = document.getElementById("errorBox").innerText = "Incorrect"
       errorBox = document.getElementById("errorBox").style.display = "block"
       numberReveal = document.getElementById("num-box").style.display = "flex"
       restart = document.getElementById("restart").style.display = "block"
       restart = document.getElementById("restart").innerText = "Try Again"
       submit.style.display = "none"
    } else {
       errorBox = document.getElementById("errorBox").innerText = "Correct"
       errorBox = document.getElementById("errorBox").style.display = "block"
       restart = document.getElementById("restart").style.display = "block"
       restart = document.getElementById("restart").innerText = "Play Again?"
       submit.style.display = "none"
    }
}
function numberRev(){
    numberReveal = document.getElementById("num-box").innerText = generateNum
}