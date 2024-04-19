  
  function rockPaperScissors(player1, player2) {
  const winingPairs = [["rock", "scissors"], ["paper", "rock"]]

  for (let i in winingPairs) {
    if (player1 === player2) {
      return "draw"
    }
    console.log(winingPairs[i])
    if (winingPairs[i][0] == player1) {
      return "player1"
    } else {
      return "player2"
    }
  }
  }

  console.log(rockPaperScissors("rock", "rock"))
  console.log(rockPaperScissors("paper", "rock"))