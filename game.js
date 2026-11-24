let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");




const genCompChoice=()=>{
    //roack paper scissors
    const options=["rock","paper","scissors"];
  const randId = Math.floor( Math.random()*3);
  return options[randId];

}

const drawGame =()=>{
    console.log("game was draw.");
    msg.innerText="Game was draw.";
    msg.style.backgroundColor="#081b31";
}



const showWinner=(userWin,userChoice,CompChoice)=>{
    if(userWin){
        console.log("you win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose!");
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You lose! ${CompChoice} beats Your ${userChoice} `;
        msg.style.backgroundColor="red";

    }
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate computer choices
    const CompChoice = genCompChoice();
   console.log("computer choice =",CompChoice);


   if(userChoice === CompChoice){
    drawGame();
   }
   else{
    userWin = true;
    if(userChoice==="rock"){
    userWin = CompChoice ==="paper"? false: true;
    }
    else if(userChoice==="paper"){
        userWin = CompChoice ==="scissors"? false:true;
    }
    else{
    userWin = CompChoice==="rock"?false:true;
    }
    
showWinner(userWin,userChoice,CompChoice);


   }
};



choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{

    const userChoice=choice.getAttribute("id");




        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});