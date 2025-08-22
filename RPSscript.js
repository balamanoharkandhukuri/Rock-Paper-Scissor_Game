 let userScore = 0;
 let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genComputerChoice = () => {            //Generating computer choice
    const options = ["rock", "paper", "scissors"];
    //rock, paper , scissors
    const randIdx = Math.floor(Math.random()*3) // Math.floor is used to remove the decimal values
    return options[randIdx];

}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "GAME WAS DRAW...:) PLAY AGAIN."
    msg.style.backgroundColor = "#3a0ca3";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        console.log("you win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "#008000";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lost");
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#ef233c";
    }
}




const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate the computer choice -> modular
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //computer choices left is scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //computer choices left is rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //computer choices left is rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }
}


choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        //console.log("choice was clicked");
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});