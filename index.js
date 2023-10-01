let guessNumber=document.querySelector(".guess");
let checkButton=document.querySelector(".check-btn");
let message=document.querySelector(".message");
let updatedScore=document.querySelector(".scores");
let updatedHighscore=document.querySelector(".highscores");
let resetButton=document.querySelector(".reset");
let DisplayAnswer=document.querySelector(".answer");

let randomNumber = Math.trunc(Math.random() * 20) + 1;

console.log("Random Number:" , randomNumber);

let totalScore=20;

function checkNumber () {
    let guessValue=Number(guessNumber.value);

    if(guessValue === randomNumber){
        if(totalScore > 0){
        message.textContent = "Correct Guess!";
        document.querySelector("body").style.backgroundColor="green";
        updatedHighscore.textContent=totalScore;
        DisplayAnswer.textContent = randomNumber;
        }
        else{
            document.querySelector("body").style.backgroundColor="red";
            message.textContent="You have lost the game!";
            message.style.color="white";
        }
    }
    else if(guessValue < randomNumber){

        if(totalScore > 0){
        message.textContent= "Too Low..";
        message.style.color="red";
        totalScore--;
        updatedScore.textContent=totalScore;
        }
        else{
            document.querySelector("body").style.backgroundColor="red";
            message.textContent="You have lost the game!";
            message.style.color="white";
        }
    }
    else{
        if(totalScore > 0){
        message.textContent= "Too High..";
        message.style.color="red";
        totalScore--;
        updatedScore.textContent=totalScore;
        }
        else{
            document.querySelector("body").style.backgroundColor="red";
            message.textContent="You have lost the game!";
            message.style.color="white";
        }
    }
}

checkButton.addEventListener("click", checkNumber);

function resetGame () {
    document.querySelector("body").style.backgroundColor="#222";
    message.textContent = "Start Guessing...";
    totalScore=20;
    updatedScore.textContent=totalScore;
    DisplayAnswer.textContent="?";
    guessNumber.value="";
    updatedHighscore.textContent=0;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log("Random Number:" , randomNumber); 
}

resetButton.addEventListener("click", resetGame);