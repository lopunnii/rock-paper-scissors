function computerPlay () {
      const options = [
           "rock",
           "paper",
           "scissors"
      ];
      let computerPlayResult = options[Math.floor(Math.random() * options.length)]; 
      return computerPlayResult; 
 }

 function playRound (playerSelection, computerSelection) {
      let result ;
     switch (true){
         case playerSelection.toLowerCase() == computerSelection:
              result = ("It's a tie!");
              break;
         case playerSelection.toLowerCase() == "rock" && computerSelection == "scissors":
              result = ("You win! Rock beats Scissors!");
              break;
         case playerSelection.toLowerCase() == "paper" && computerSelection == "rock":
              result = ("You win! Paper beats Rock!");
              break;
         case playerSelection.toLowerCase() == "scissors" && computerSelection == "paper":
              result = ("You win! Scissors beats Paper!");
              break;
         case playerSelection.toLowerCase() == "rock" && computerSelection == "paper":
              result = ("You lose! Paper beats Rock!");
              break;
         case playerSelection.toLowerCase() == "paper" && computerSelection == "scissors":
              result = ("You lose! Scissors beats Paper!");
              break;
         case playerSelection.toLowerCase() == "scissors" && computerSelection == "rock":
              result = ("You lose! Rock beats Scissors!");
              break;
         default: 
              result = ("Please type either 'rock', 'paper' or 'scissors'");
     }
    return result;
 }

/* If statement version: 
function playRound (playerSelection, computerSelection) {
     let result; 
     if (playerSelection.toLowerCase() == computerSelection) {
          result = ("It's a tie!");
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
          result = ("You win! Rock beats Scissors!");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
          result = ("You win! Paper beats Rock!");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
          result = ("You win! Scissors beats Paper!");
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
          result = ("You lose! Paper beats Rock!");
} else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
          result = ("You lose! Scissors beats Paper!");
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
           result = ("You lose! Rock beats Scissors!")
} else {
          result = ("Please select rock, paper or scissors.");
}
   return result; 
}
*/

/*function game() {
     playRound(playerSelection, computerSelection);
 counter++;
}
*/
  
 playerSelection = "rock";
 computerSelection = computerPlay(); 

 console.log(computerSelection)
 console.log(playerSelection)
 console.log(playRound(playerSelection, computerSelection));

 computerSelection = computerPlay(); 
 console.log(computerSelection)
 console.log(playerSelection)
 console.log(playRound(playerSelection, computerSelection));

computerSelection = computerPlay(); 
 console.log(computerSelection)
 console.log(playerSelection)
 console.log(playRound(playerSelection, computerSelection));

 computerSelection = computerPlay(); 
 console.log(computerSelection)
 console.log(playerSelection)
 console.log(playRound(playerSelection, computerSelection));

 computerSelection = computerPlay(); 
 console.log(computerSelection)
 console.log(playerSelection)
 console.log(playRound(playerSelection, computerSelection));

 /*
counter = 0;
while (counter<5)
{
     computerSelection = computerPlay(); 
     console.log(computerSelection)
     console.log(playerSelection)
     console.log(playRound(playerSelection, computerSelection));
    counter ++;
}
*/ 