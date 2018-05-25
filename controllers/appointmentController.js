const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');

exports.test = (req, res, next) => {
  res.status(200).json({msg: "protected route works"});
}

exports.updateAppointmentByIdByUser = (req, res, next) => {
  Appointment.update(
    {
      _id: req.params.appt_id,
      user: req.params.user_id,
    },
    { $set:{
      title : req.body.title,
      with_person : req.body.with_person,
      appointment_date :req.body.appointment_date,
      notes: req.body.notes
    }
  })
  .then( (result) => {
    Appointment.findById(req.params.appt_id)
    .then( doc => {
			if (doc!= null){
				console.log("Updated Order", doc);
				res.status(200).json({ appointment: doc})
			} else {
				console.log("Nothing in DB");
				res.status(400).json({ msg: "No Records Found"});
			}
		})
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: error});
    });

  })
  .catch( err => {
    console.log(error);
    res.status(500).json({ error: error});
  });
}

exports.getAppointmentByIdByUser = (req, res, next) =>{
  Appointment.findOne({ user: req.params.user_id, _id: req.params.appt_id})
  .then( doc =>{
    if (doc){
      res.status(200).json({ appointment: doc});
    } else {
      res.status(404).json({ msg: "User/Appt Not Found"});
    }
  })
  .catch( err => {
    console.log(error);
		res.status(500).json({ error: error});
  })
}

exports.getAppointmentsByUser = (req, res, next) =>{
  Appointment.find({ user : req.params.user_id})
	.select('title with_person appointment_date notes')
	.exec()
	.then( docs => {
		if (docs.length > 0){
			res.status(200).json({ appointments: docs});
		} else {
			console.log("Nothing in DB");
			res.status(200).json({ msg: "Nothing Created yet", nothing_in_db: true});
		}
	})
	.catch(error => {
		console.log(error);
		res.status(500).json({ error: error});
	});
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
