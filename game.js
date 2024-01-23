let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice"); //accessing choices
const msg=document.querySelector("#mssg");

const userScorePara=document.querySelector("#userscore");
const compScorePara=document.querySelector("#compscore");



const genCompChoice=()=>
{
    //rock,paper,scissors
    const options=["rock","paper","scissors"]; 
    //strings don't generate but by using math.random() function  we generate numbers which treated indices to the string.That's the reason for storing string in array
    // Math.random()*3-->generate number range in 0 to 2
    // Math.random()*10-->generate number range in 0 to 9
    // math.floor(Math.random()*3)-->generate number range in 0 to 2 without decimal
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=() =>
{
    console.log("game was draw");
    mssg.innerText="Game was draw,Play again!";
    mssg.style.backgroundColor= "#081b31";
};

const showWinner = (userWin,userChoice,compChoice)=>
{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        mssg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose!");
        mssg.innerText=`You Lose!  ${compChoice} beats your ${userChoice}`;
        mssg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=> //generating computer random choice and compare with user for updating scoreboard
{
    //generate computer choice-->modular
    const compChoice=genCompChoice(); //computer choice
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice)
    {
        //draw game
        drawgame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissors,paper
            userWin = compChoice==="paper"?false:true;//tracking userWin by checking cmpchoice 
        }
        else if(userChoice=="paper")
        {
            //rock,scissors
            userWin = compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=> //accesing individual div from choices class
{
    // console.log(choice);
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id"); //accessing id's of individual choices
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});