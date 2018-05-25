const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');

exports.test = (req, res, next) => {
  res.status(200).json({msg: "protected route works"});
}

exports.createAppointment = (req, res, next) => {
  if (!req.body.title || !req.body.with_person || !req.body.appointment_date || !req.body.notes){
    return res.status(500).json({msg: "Values Missing"});
  }

  new Appointment({
    _id : new mongoose.Types.ObjectId(),
    title : req.body.title,
    with_person : req.body.with_person,
    appointment_date :req.body.appointment_date,
    notes: req.body.notes,
    user: req.body.user_id
  }).save()
  .then( result => {
    console.log(result);
    res.status(201).json({ msg: "appointment created", appointment_created: true, appointment: result});
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({ error: err});
  });

}
