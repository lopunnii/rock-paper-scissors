function computerPlay () {
      const options = [
           "rock",
           "paper",
           "scissors"
      ];
      let computerPlayResult = options[Math.floor(Math.random() * options.length)]; 
      return computerPlayResult; 
 }

 computerSelection = computerPlay();

 playerSelection = "rock";

 function playRound (playerSelection, computerSelection) {
      console.log(playerSelection);
      computerSelection = computerPlay();
      console.log(computerSelection);
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

 console.log(playRound(playerSelection, computerSelection));
 console.log(playRound(playerSelection, computerSelection));
 console.log(playRound(playerSelection, computerSelection));
 console.log(playRound(playerSelection, computerSelection));
 console.log(playRound(playerSelection, computerSelection));

