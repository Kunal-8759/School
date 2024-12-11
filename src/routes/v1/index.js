const express = require('express');
const pingRouter = require('./pingRoutes');
const schoolRouter = require('./schoolRoutes');

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);
v1Router.use('/school', schoolRouter);

module.exports = v1Router;