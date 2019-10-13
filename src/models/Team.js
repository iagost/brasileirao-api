
class Team{
  constructor(id, name, playedGames, position, points, won, draw, lost, goalsFor, goalsAgainst, goalDifference){
     this.id = id;
     this.name = name;
     this.playedGames = playedGames;
     this.position = position;
     this.points = points;
     this.won = won;
     this.draw = draw;
     this.lost = lost;
     this.goalsFor = goalsFor;
     this.goalsAgainst = goalsAgainst;
     this.goalDifference = goalDifference;
  }
}


module.exports = Team; 