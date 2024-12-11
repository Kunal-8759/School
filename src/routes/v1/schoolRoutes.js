const express = require('express');
const SchoolController = require('../../controllers/schoolController');
const SchoolMiddleware = require('../../middlewares/schoolMiddleware');

const schoolRouter = express.Router();

schoolRouter.post('/addSchool',SchoolMiddleware.validateAddSchool ,SchoolController.addSchool);
schoolRouter.get('/listSchools',SchoolMiddleware.validategetAllSchool ,SchoolController.getAllSchools);

module.exports = schoolRouter;
