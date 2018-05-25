const express = require('express');
const appointmentRouter = express.Router();

const appointmentController = require('../controllers/appointmentController');

appointmentRouter.get('/test',  appointmentController.test);
appointmentRouter.get('/:user_id/all',  appointmentController.getAppointmentsByUser);
appointmentRouter.get('/:user_id/:appt_id',  appointmentController.getAppointmentByIdByUser);
appointmentRouter.put('/:user_id/:appt_id',  appointmentController.updateAppointmentByIdByUser);
appointmentRouter.post('/create',  appointmentController.createAppointment);


module.exports = appointmentRouter;
