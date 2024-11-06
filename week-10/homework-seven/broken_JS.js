let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(PlayerChoice) {
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];
  //document.getElementById("result-decision") == "The computer chose:" + Boolean(CompDecision)
  resultDecisionRef = document.getElementById("resultDecision");
  resultDecisionRef.innerHTML = "The computer chose: " + CompDecision;

  /**
   * THE CHANGES I MADE:
   * I made a variable reference for the result and decision div, so
   * i didnt have to keep re writng the document.getElement.. everytime it needed to be updated
   * Added code so the div gets updated with every choice the user makes
   * I assumed the first statement was for a draw situation as it only took -0.5 instead of 1 like in the other statements
   * I compared the playerchoice to the index of the computer decision to check if they are the same - meaning it is a draw
   * I changed the word num to playerchoice as there was no num variable and it made more sense for it to be the player choice
   * I fixed the typos, fixed the array
   * I took out the boolean inside compDecision and fixed the square brakets + parenthesis
   * I fixed the = signs inside the conditions and when adding to the score
   * I changed the individual if statements to make them nested
   * I also fixed the indentation
   * Score logic of the game:
   * Wins: +1
   * Loses: -1
   * Ties: -0.5
   */
  
  //for draw
  if(PlayerChoice===CompArray.indexOf(CompDecision))
  {
    resultDecisionRef.innerHTML = "Result: Tied. Decision: The computer chose: " + CompDecision;
    innerscore -= 0.5;
  }
  //for rock
  else if(PlayerChoice === 0) 
  {
    if(CompDecision == "Paper")
    {
      resultDecisionRef.innerHTML = "Result: Lost. Decision: The computer chose: " + CompDecision;
      innerscore -= 1;
    }
    else if(CompDecision == "Scissors")
    {
      resultDecisionRef.innerHTML = "Result: Won. Decision: The computer chose: " + CompDecision;
      innerscore += 1;
    }
  }
  //fot paper
  else if (PlayerChoice === 1)
  {
    if(CompDecision == "Rock")
    {
      resultDecisionRef.innerHTML = "Result: Won. Decision: The computer chose: " + CompDecision;
      innerscore += 1;
    }
    else if(CompDecision == "Scissors")
    {
      resultDecisionRef.innerHTML = "Result: Lost. Decision: The computer chose: " + CompDecision;
      innerscore -= 1;
    }
  }
  //for scissors
  else if(PlayerChoice === 2)
  {
    if(CompDecision == "Rock")
    {
      resultDecisionRef.innerHTML = "Result: Lost. Decision: The computer chose: " + CompDecision;
      innerscore -= 1;
    }
    else if(CompDecision == "Paper")
    {
      resultDecisionRef.innerHTML = "Result: Won. Decision: The computer chose: " + CompDecision;
      innerscore += 1;
    }
          
  }


  document.getElementById("Score").innerHTML = "Score: " + innerscore;
}