let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice =()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
    console.log("It was a Draw");
    msg.innerHTML = " Game was Drawn. Play Again Dude";
    msg.style.backgroundColor = "#081b31"
}

const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++; 
        userScorePara.innerText = userScore;
               console.log("You win!");
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else {
        console.log("You lost");
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerHTML = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playGame =(userChoice)=>{
   console.log("user choice", userChoice);
   const compChoice = gencompChoice();
   console.log("comp choice", compChoice);

   if(userChoice == compChoice){
       drawGame();
   }else {
    let userWin = true ;
    if(userChoice === "Rock"){
        userWin = compChoice === "paper" ? false: true;
    } else if (userChoice === "paper" ){
        userWin = compChoice === "scissors" ? false : true;
       }else {
        userWin = compChoice === "rock" ? false: true;
       }
       showWinner(userWin, userChoice, compChoice);
   } 
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})