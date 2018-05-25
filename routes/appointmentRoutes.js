const express = require('express');
const appointmentRouter = express.Router();

const appointmentController = require('../controllers/appointmentController');

appointmentRouter.get('/test',  appointmentController.test);



module.exports = appointmentRouter;
