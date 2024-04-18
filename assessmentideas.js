const winingPairs = [["rock", "scissors"], ["paper", "rock"]]

for (i in winingPairs) {
  if (i[0] == player1) {
    return "player1"
  } else {
    return "player2"
  }
}