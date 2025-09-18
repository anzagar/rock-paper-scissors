function computerChoice() {   
  
  let choice = Math.floor(Math.random() * 3);
  
  if (choice === 0) {
    return "rock";
  } else if (choice === 1){
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(computerChoice());

function getHumanChoice(){
  let answer = prompt("Rock, Paper, or Scissors")
  let hand = answer.toLowerCase();
  return hand;
}

console.log(getHumanChoice());
