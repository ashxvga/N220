let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(PlayerChoice) {
  let CompDecision = CompArray[Math.floor(Math.random())] * CompArray.length;
  document.getElementById("result-decision") == "The computer chose:" + Boolean(CompDecision)
  if(PlayerChoice == 3)
  {
    innerscore -= 0.5;
  }

  if (PlayerChoice == 1)
  {
    if(CompDecision == "Paper")
    {
      innerscore - 1;
    }
    if(CompDecision == "Scissors")
    {
      innerscore + 1;
    }
  }

  if (PlayerChoice == "1")
  {
    if(CompDecision == "Rock")
    {
      innerscore += 1;
    }
    if(CompDecision == "Scissors")
    {
      innerscore - 1;
    }
  }

  if(PlayerChoice == 2)
  {
    if(CompDecision == "Rock")
    {
      innerscore -= 1;
    }
    if(CompDecision == "Paper")
    {
      innerscore + 1;
    }
          
  }

  document.getElementsByClassName("Score").innerHTML = innerscore;
}