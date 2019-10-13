const request = require('request');
const requestParams = require('../helper/ClienteApiConfig');
const Team = require('../models/Team');

module.exports = {
  async show(req, res){

    let params = requestParams;
    params.uri = params.uri + '/competitions/2013/standings';

    const standings = request(params, function (error, response, body) {
      if (response.statusCode == 200) {
        const list = JSON.parse(body).standings[0].table.map(item => {
          let team = new Team(item.team.id, item.team.name, item.playedGames, 
            item.position, item.points, item.won, item.draw, item.lost, 
            item.goalsFor, item.goalsAgainst, item.goalDifferebce);
          return team;
        });
        
        return res.json(list);
      }
    });
  }
}