const express = require('express');
const appointmentRouter = express.Router();

const appointmentController = require('../controllers/appointmentController');

appointmentRouter.get('/test',  appointmentController.test);
appointmentRouter.get('/all/:user_id',  appointmentController.getAppointmentsByUser);
appointmentRouter.post('/create',  appointmentController.createAppointment);


module.exports = appointmentRouter;
