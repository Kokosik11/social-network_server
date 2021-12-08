const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/user.controller');

Router.get('/', Controller.getAll);

module.exports = Router;