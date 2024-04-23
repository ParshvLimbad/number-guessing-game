/*
let btn = document.getElementById("btn")
let guess = "Guess the number between 1 to 10";
let genNum;
let userInput;
let errmsg = document.getElementById("errorMsg");
let correctmsg;
let userInp = document.getElementById("txt-box");
function numberGen() {
    genNum = console.log(Math.floor(Math.random() * 10) + 1);
    guess = "Guess the number between 1 to 10";
    userInput = parseInt(prompt(guess));
    userInp.style.display = "block";
    if (guess !== userInput) {
        errmsg.innerText = "That is incorrect. Try Again"
    } else {
        errmsg.innerText = "That is correct!";
    }
};

btn.onclick = numberGen;
*/