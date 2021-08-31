const options = [
    "rock",
    "paper",
    "scissors"
];

 const computerPlay = options[Math.floor(Math.random() * options.length)];

 function playRound (playerSelection, computerSelection) {
      let result;
     switch (true){
         case playerSelection == computerSelection:
              result = ("It's a tie!")
              break;
         case playerSelection == "rock" && computerSelection == "scissors":
              result = ("You win! Rock beats Scissors!")
              break;
         case playerSelection == "paper" && computerSelection == "rock":
              result = ("You win! Paper beats Rock!")
              break;
         case playerSelection == "scissors" && computerSelection == "paper":
              result = ("You win! Scissors beats Paper!")
              break;
         case playerSelection == "rock" && computerSelection == "paper":
              result = ("You lose! Paper beats Rock!")
              break;
         case playerSelection == "paper" && computerSelection == "scissors":
              result = ("You lose! Scissors beats Paper!")
              break;
         case playerSelection == "scissors" && computerSelection == "rock":
              result = ("You lose! Rock beats Scissors!")
              break;
     }
    return result;
 }


/*function playRound (playerSelection, computerSelection) {
     let result; 
     if (playerSelection == computerSelection) {
          result = ("It's a tie!");
} else if (playerSelection == "rock" && computerSelection == "scissors") {
          result = ("You win! Rock beats Scissors!");
} else if (playerSelection == "paper" && computerSelection == "rock") {
          result = ("You win! Paper beats Rock!");
} else if (playerSelection == "scissors" && computerSelection == "paper") {
          result = ("You win! Scissors beats Paper!");
} else if (playerSelection == "rock" && computerSelection == "paper") {
          result = ("You lose! Paper beats Rock!");
} else if (playerSelection == "paper" && computerSelection == "scissors") {
          result = ("You lose! Scissors beats Paper!");
} else if (playerSelection == "scissors" && computerSelection == "rock") {
           result = ("You lose! Rock beats Scissors!")
} else {
          result = ("Please select rock, paper or scissors.");
}
   return result; 
}
*/
 
 const playerSelection = "rock";
 const computerSelection = computerPlay; 

 console.log(computerSelection)
 console.log(playerSelection)
 console.log(playRound(playerSelection, computerSelection));
 