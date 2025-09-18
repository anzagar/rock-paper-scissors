function getComputerChoice(){   
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1){
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(){
  let answer = prompt("Rock, Paper, or Scissors");
  return answer.toLowerCase();
}

function playRound(humanSelection, computerSelection){

  if (humanSelection === computerSelection) {
    console.log(humanSelection, "against", computerSelection, "is Equal! No points.");
    return "tie";
  } else if (
    (humanSelection === "paper" && computerSelection === "rock") 
      ||
    (humanSelection === "scissors" && computerSelection === "paper") 
      ||
    (humanSelection === "rock" && computerSelection === "scissors")
  ) {
    console.log(humanSelection, "beats", computerSelection, "! +1 point.");
    return "human";
  } else if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(computerSelection, "beats", humanSelection, "! You lose! +1 point to the Computer.");
    return "computer";
  } else {
    console.log("Invalid choice.");
    return null;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  while (round <= 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("Round number", round, "of 5");
    console.log("You chose:", humanSelection);
    console.log("The Computer chose:", computerSelection);

    let result = playRound(humanSelection, computerSelection);

    if (result === "human") {
      humanScore++;
      round++; // only move to next round if someone scored
    } else if (result === "computer") {
      computerScore++;
      round++;
    } else {
      console.log("Tie! Replay this round.");
      // notice we do NOT increment round here
    }
  }

  console.log("Final Score! [Human:", humanScore, "] [Computer:", computerScore, "]");
  if (humanScore < computerScore ) {
    console.log("Bow down to your Overlord, meatbag!");
  } else {
    console.log("Clankers have been defeated! For now...");
  }
}

playGame();
