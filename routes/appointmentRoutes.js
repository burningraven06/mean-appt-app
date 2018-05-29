const express = require('express');
const appointmentRouter = express.Router();
const multerFileUpload = require('../config/fileUpload');
const appointmentController = require('../controllers/appointmentController');

appointmentRouter.get('/test',  appointmentController.test);
appointmentRouter.get('/:user_id/all',  appointmentController.getAppointmentsByUser);
appointmentRouter.get('/:user_id/:appt_id',  appointmentController.getAppointmentByIdByUser);
appointmentRouter.put('/:user_id/:appt_id',  appointmentController.updateAppointmentByIdByUser);
appointmentRouter.delete('/:user_id/:appt_id',  appointmentController.deleteAppointmentByIdByUser);

appointmentRouter.post('/createwithimg',  multerFileUpload.single('appt_img'), appointmentController.createAppointmentWithImg);

appointmentRouter.post('/create', appointmentController.createAppointment);
module.exports = appointmentRouter;
