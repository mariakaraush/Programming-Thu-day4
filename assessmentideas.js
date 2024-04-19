  
  function rockPaperScissors(player1, player2) {
    const winingPairs = [
      ["rock", "scissors"], 
      ["paper", "rock"], 
      ["scissors", "paper"], 
      ["paper", "rock"], 
      ["lizard", "paper"], 
      ["lizard", "spock" ],
      ["spock", "scissors"], 
      ["paper", "spock" ], 
      ["rock", "lizard"], 
      ["scissors", "lizard" ], 
      ["spock", "rock"]
    ];

  for (let i = 0; i < winingPairs.length; i++) {
    // if (player1 === player2) {
    //   return "draw"
    // };
    console.log(winingPairs[i])
  //   if (winingPairs[i][0] == player1) {
  //     return "player1"
  //   } 
  //     return "player2"
  // }
  }

console.log(rockPaperScissors("scissors", "paper"))
// console.log(rockPaperScissors("rock", "rock"))
// console.log(rockPaperScissors("paper", "rock"))
// console.log(rockPaperScissors("rock", "rock"))
// console.log(rockPaperScissors("rock", "paper"))
// console.log(rockPaperScissors("paper", "spock"))
// console.log(rockPaperScissors("scissors", "lizard"))
// console.log(rockPaperScissors("spock", "spock"))