//From now we will use MODULAR CODING a.k.a creating functions for various blocks of code for recalls.
//It's easy, don't be afraid.


let humanScore= 0;
let compScore= 0;

const choice= document.querySelectorAll(".choice");
choice.forEach((choice)=>{
    choice.addEventListener(("click"), ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice)
    })
})
//we did array wo so that random index number can be selected using math.random
//math.random gives a random decimal number between a range , however==> math.random()*10 would give random numbers b/w 0-9, math.random()*4 would give b/w 0-3 , always one less.
//In order to get perfect numbers and remove decimals we use math.floor(math.random()*n)

const genCompChoice= ()=>{
    const options= ["rock", "paper", "scissors"] ;
    const randomIdx= Math.floor(Math.random()*3);
    return options[randomIdx];
}    

const playGame= (userChoice)=>{
    console.log(`User choice= ${userChoice}`);
    const compChoice=  genCompChoice(); 
    console.log(`Computer choice = ${compChoice}`)
    if(userChoice===compChoice){
        console.log("The match is a DRAW")
        gamemsg.innerText= "Draw XD";
        gamemsg.style.backgroundColor= "aquamarine"

    }
    else{
        let userWin= true;//variable which we set to true for now
        if(userChoice==="rock"){ 
        userWin= compChoice==="paper" ? false : true;// the"?" operator is very easy, youtube it.
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors" ? false : true;
        }
        else{
            userWin= compChoice==="rock" ? false : true;
        }
        showWin(userWin, userChoice, compChoice);//lets make this function
    }
}
const showWin=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("Congratulations! You WIN :)")
        humanScore++;
        humanscorepara.innerText= humanScore;
        gamemsg.innerText= `You WIN :) as ${userChoice} beats ${compChoice}` ;
        gamemsg.style.backgroundColor= "chartreuse"//this code is below after logic
    }
    else{
        console.log("Sorry! You lost :(")
        compScore++;
        compscorepara.innerText= compScore;
        gamemsg.innerText= `You lost :(  as ${compChoice} beats ${userChoice}`;
        gamemsg.style.backgroundColor= "tomato"

    }
}

//GAME LOGIC HAS BEEN COMPLETED , YIPIEEEEEEE!!!! :)
//NOW MESSAGE CHANGING AND SCORE CHANGING

const gamemsg = document.querySelector("#gamemsg");
const humanscorepara= document.querySelector("#humanscore")
const compscorepara= document.querySelector("#compscore")


//GAME IS DONE
// FOR REVISION JUST LISTEN TO THE END PART OF GAME BUILDING VIDEO FROM APNA ChannelMergerNode, IT IS SUMMARIZED

