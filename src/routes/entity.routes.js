const express = require('express');
const routes = express.Router();
const entityController = require('../controllers/entity.controller')

routes.post('/entities/filter', entityController.handler);

module.exports = routes;