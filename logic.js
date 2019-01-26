//Global Variables

//Tracks the selections for player and computer
var computerPick;
var playerPick;

//Tracks the score for player and computer
var playerScore = 0;
var computerScore = 0;

//Set Win criteria
function determineWinner(){
    if(computerPick === "rock" && playerPick ==="scissors"){
        console.log("comp: rock /n player:scissor");
        computerScore++;
        setScore("computer");
    }else if(computerPick === "rock" && playerPick ==="paper"){
        console.log("comp: rock /n player:paper");
        playerScore++;
        setScore("player");
    }else if(computerPick === "rock" && playerPick ==="rock"){
        console.log("comp: rock /n player:rock");
    }else if(computerPick === "paper" && playerPick ==="rock"){
        console.log("comp: paper /n player:rock");
        computerScore++;
        setScore("computer");
    }else if(computerPick === "paper" && playerPick ==="paper"){
        console.log("comp: paper /n player:paper"); 
    }else if(computerPick === "paper" && playerPick ==="scissor"){
        console.log("comp: paper /n player:scissor");
        playerScore++;  
        setScore("player");
    }else if(computerPick === "scissor" && playerPick ==="rock"){
        console.log("comp: scissor /n player:rock");
        playerScore++;  
        setScore("player");
    }else if(computerPick === "scissor" && playerPick ==="paper"){
        console.log("comp: scissor /n player:paper");
        computerScore++;
        setScore("computer");
    }else if(computerPick === "scissor" && playerPick ==="scissor"){
        console.log("comp: scissor /n player:scissor");
          
    }
}

//On Click Events for Rock Paper or Scissor buttons
var rockElement = document.getElementById('rock');

rockElement.addEventListener("click",()=>{
    
    //set player picks
    playerPick = "rock";
    
    //Set Up the Player UI for Selection
    playerSetRock();

    //Pick a selection for computer & set UI
    generateWeapon();

    //determine the winner based on selections, set score, and change score UI
    determineWinner();


}); 


var paperElement = document.getElementById('paper');

paperElement.addEventListener("click",()=>{
    
    playerPick = "paper";

    console.log("Paper Clicked")

    //Set Up the Player UI for Selection
    playerSetPaper();

    //Pick a selection for computer & set UI
    generateWeapon();

    //determine the winner based on selections, set score, and change score UI
    determineWinner();

}); 


var scissorElement = document.getElementById('scissor');

scissorElement.addEventListener("click",()=>{
    
    playerPick = "scissor";

    console.log(" Scissor Clicked")

    //Set Up the Player UI for Selection
    playerSetScissors();

    //Pick a selection for computer & set UI
    generateWeapon();

    //determine the winner based on selections, set score, and change score UI
    determineWinner();

}); 


function playerSetRock(){
    console.log("Player: Rock");
    //Set the image
    var playerImageElement = document.getElementById('playerImage');

    playerImageElement.src= "images/rock.jpg";
    
    //Set the title
    var titleElement = document.getElementById('playerWeaponTitle');

    titleElement.innerHTML = "Rock";

}

function playerSetPaper(){
    console.log("Player: Paper");
    //Set the image
    var playerImageElement = document.getElementById('playerImage');

    playerImageElement.src= "images/paper.jpg";
    
    //Set the title
    var titleElement = document.getElementById('playerWeaponTitle');

    titleElement.innerHTML = "Paper";

}

function playerSetScissors(){
    console.log("Player: Scissors");
    //Set the image
    var computerImageElement = document.getElementById('playerImage');

    computerImageElement.src= "images/scissors.jpg";
    
    //Set the title
    var titleElement = document.getElementById('playerWeaponTitle');

    titleElement.innerHTML = "Scissors";

}


function generateWeapon(){
    //Create the selection array
    var weaponArray = ["Rock","Paper","Scissors"];

    //Pick a selection at random
    var weapon = weaponArray[Math.floor(Math.random()*weaponArray.length)];
    console.log("Weapon " + weapon);
    
    //Set for Rock
    if(weapon === "Rock"){
       
        //Set the image
        var computerImageElement = document.getElementById('computerImage');
        computerImageElement.src= "images/rock.jpg";
        
        //Set the title
        var titleElement = document.getElementById('weaponTitle');
        titleElement.innerHTML = "Rock";

        //Set computer selection
        computerPick ="rock";

    }

    //Set for Paper
    if(weapon === "Paper"){
        
        //Set the image
        var computerImageElement = document.getElementById('computerImage');

        computerImageElement.src= "images/paper.jpg";
        //Set the title
        var titleElement = document.getElementById('weaponTitle');
        titleElement.innerHTML = "Paper";

        //Set computer selection
        computerPick ="paper";
    }

    //Set for Scissors
    if(weapon === "Scissors"){
        console.log(titleElement);
        console.log("TRUE");
        //Set the image
        var computerImageElement = document.getElementById('computerImage');

        computerImageElement.src= "images/scissors.jpg";
        //Set the title
        var titleElement = document.getElementById('weaponTitle');
        titleElement.innerHTML = "Scissors";

        //Set computer selection
        computerPick ="scissor";

    }

}

//Set Score
function setScore(playerOrComputerString){

    //Player Wins
    if(playerOrComputerString === "player"){

        //Change Score UI for Player
        document.getElementById('playerScore').innerHTML="Player Score: " + playerScore;

    //Computer Wins
    }else if(playerOrComputerString === "computer"){

        //Change Score UI for computer
        document.getElementById('computerScore').innerHTML="Computer Score: " + computerScore;
    }else{

        //If neither match, something went wrong, show an error
        alert("Something Went Wrong, please refresh");
    }
}


