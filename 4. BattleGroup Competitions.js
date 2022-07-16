/*
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.
*/
function tournamentWinner(competitions, results) {
    // Write your code here.
    var h1 = {};
    competitions.forEach((battlePair)=>{
      won_team = (results.shift() == 1) ? battlePair[0] : battlePair[1]
      h1[[won_team]] ? h1[won_team]+=3 : h1[won_team]=3
    })
    won_team_points = 0
    won_team_name = 0
    for(const [key,value] of Object.entries(h1)){
       if(value > won_team_points){
         won_team_name = key
         won_team_points = value
       }
    }
    return won_team_name
}

console.log(tournamentWinner([["HTML", "C#"],["C#", "Python"],["Python", "HTML"]], [0, 0, 1]))
