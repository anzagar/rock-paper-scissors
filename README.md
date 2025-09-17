# Rock-Paper-Scissors

A simple rock paper scissors game for The Odin Project in vanilla JS.

Instructions from the course: 

1. Create the game in an external JS file.
2. Write function called "getComputerChoice" that returns "rock", "paper" or
   "scissors". (Math.random method)
3. add console.log to see what it returns.
4. write function that takes user choice and returns it:
  1.  "getHumanChoice" teturns one of the valid choices.
  2. use prompt method to obtain user imput.
  3. no need to do reprompting if they make an invalid selection.
5. add console.log to see what it returns.
6. Declare score variables:
  1. humanScore and computerScore in global scope.
  2. initialize those variables with 0.
7. Write logic for a round:
  1. function called playRound.
  2. two params for playRound: 
    1. humanChoice and computerChoice.
    2. make human choice case-insensitive.
    3. console log a string value representing the round winner.
  3. increment humanscore or computerscore variable based on the round winner.

Example code:
```javascript 
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelecti
```

8. add logic to play game for 5 rounds:
  1. function named playGame that calls playRound for 5 rounds:
    1. Should keep track of scores and declare winner at the end.
  2. move playRound function and score variables so that they're declared
     inside of the playGame function
  3. play 5 rounds by calling playRound 5 times. 
