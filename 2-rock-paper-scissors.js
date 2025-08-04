const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#resetBtn');

rockBtn.addEventListener('click', () => {
  playGame('rock');
});

paperBtn.addEventListener('click', () => {
  playGame('paper');
});

scissorsBtn.addEventListener('click', () => {
  playGame('scissors');
});

resetBtn.addEventListener('click', () => {
  resetScore();
});

const playGame = (playerTurn) => {
  let compMove = '';
  const ranMove = Math.random();
  
  if (ranMove >= 0 && ranMove < 1/3) {
    compMove = 'rock';
  } else if (ranMove >= 1/3 && ranMove < 2/3) {
    compMove = 'paper';
  } else {
    compMove = 'scissors';
  }
  
  let result = '';
  
  if (playerTurn === 'rock')   {
    if (compMove === 'rock') {
      result = 'Its tie';
    } else if (compMove === 'paper') {
      result = 'Comp wins';
    } else if (compMove === 'scissors') {
      result = 'You win';
    }
  }
  
  else if (playerTurn === 'paper')   {
    if (compMove === 'rock') {
      result = 'You win';
    } else if (compMove === 'paper') {
      result = 'Its tie';
    } else if (compMove === 'scissors') {
      result = 'Comp wins';
    }
  }
  
  else if (playerTurn === 'scissors')   {
    if (compMove === 'rock') {
      result = 'Comp wins';
    } else if (compMove === 'paper') {
      result = 'You win';
    } else if (compMove === 'scissors') {
      result = 'Its tie';
    }
  }
  moveNcolor(playerTurn, compMove, result); 
}


const moveNcolor = (playerTurn, compMove, result) => {
  let movedisplay = document.getElementById('move');
  let color = document.querySelector('#move');
  if (result === 'You win') {
    movedisplay.innerHTML = `${result}! ${playerTurn} beats ${compMove}`;
    color.style.backgroundColor = 'green';
    updateScore('user');;
  } else if (result === 'Comp wins')  {
    movedisplay.innerHTML = `${result}! ${compMove} beats ${playerTurn}`;
    color.style.backgroundColor = 'red';
    updateScore('comp');;
  } else   {
    movedisplay.innerHTML = `${result}! Both chooses ${playerTurn}`;
    color.style.backgroundColor = 'grey';
  }

}

const userScoreDisplay = document.getElementById('user-score');
const compScoreDisplay = document.getElementById('comp-score');



function updateScore(winner) {
  if (winner === 'user') {
    let userScore = parseInt(userScoreDisplay.innerHTML);
    userScoreDisplay.innerHTML = ++userScore;
  } else if (winner === 'comp') {
    let compScore = parseInt(compScoreDisplay.innerHTML);
    compScoreDisplay.innerHTML = ++compScore;
  }
}

function resetScore() {
  userScoreDisplay.innerHTML = '0';
  compScoreDisplay.innerHTML = '0';
}