const express = require('express');
const routes = express.Router();


const TableController = require('./controllers/TableController');
const MatchesController = require('./controllers/MatchesController');


routes.get("/table", TableController.show);
routes.get("/matches/:round", MatchesController.show);

module.exports = routes;