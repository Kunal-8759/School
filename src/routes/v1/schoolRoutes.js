const express = require('express');
const SchoolController = require('../../controllers/schoolController');
const SchoolMiddleware = require('../../middlewares/schoolMiddleware');

const schoolRouter = express.Router();

schoolRouter.post('/',SchoolMiddleware.validateAddSchool ,SchoolController.addSchool);

module.exports = schoolRouter;
