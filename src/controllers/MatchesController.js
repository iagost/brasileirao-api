const request = require('request');
const requestParams = require('../helper/ClienteApiConfig');
const Match = require('../models/Match');

module.exports = {
  async show(req, res){

    let params = requestParams;
    params.uri = params.uri + '/competitions/2013/matches';

    request(params, function (error, response, body) {
      if (response.statusCode == 200) {
        const matches = JSON.parse(body).matches.filter(item => {
          return item.matchday === parseInt(req.params.round);
        });

        const list = matches.map(item => {
          let score = {
            winner: item.score.winner,
            fulltime: {
              homeTeam: item.score.fullTime.homeTeam,
              awayTeam: item.score.fullTime.awayTeam
            }
          }
          let match = new Match(item.id, item.status, item.matchday, 
            item.utcDate, score, item.homeTeam.id, item.awayTeam.id);
          return match;
        });
        
        return res.json(list);
      }
    });
  }
}


