const options = [
    "rock",
    "paper",
    "scissors"
];

 computerPlay = options[Math.floor(Math.random() * options.length)]; 

 function playRound (playerSelection, computerSelection) {
     switch (true){
              //Player Ties:
         case playerSelection == computerSelection:
              console.log("It's a tie!")
              break;
              // Player Wins:
         case playerSelection == "rock" && computerSelection == "scissors":
              console.log("You win! Rock beats Scissors!")
              break;
         case playerSelection == "paper" && computerSelection == "rock":
              console.log("You win! Paper beats Rock!")
              break;
         case playerSelection == "scissors" && computerSelection == "paper":
              console.log("You win! Scissors beats Paper!")
              break;
              // Player Loses:
         case playerSelection == "rock" && computerSelection == "paper":
              console.log("You lose! Paper beats Rock!")
              break;
         case playerSelection == "paper" && computerSelection == "scissors":
              console.log("You lose! Scissors beats Paper!")
              break;
         case playerSelection == "scissors" && computerSelection == "rock":
              console.log("You lose! Rock beats Scissors!")
              break;
     }
    
 }

 computerSelection = computerPlay; 
 playerSelection = "rock";

 console.log(computerSelection)