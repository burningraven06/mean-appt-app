const mongoose = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.loginUser = (req, res, next) => {
  if (!req.body.email || !req.body.password){
    return res.status(500).json({msg: "Values Missing"});
  }

  User.find({email: req.body.email})
  .then( data => {
    if (data.length < 1){
      return res.status(401).json({ msg: "Auth Failed", invalid_email: true});
    } else {
      bcrypt.compare(req.body.password, data[0].password, (err, result) => {
        if (err){
          return res.status(401).json({ msg: "Auth Failed"});
        }

        if (result){
          const jwtSignOpts = {
            email: data[0].email,
            user_id: data[0]._id
          }
          const jwtTokenOpts = {
            expiresIn: 172800
          }

          const token = jwt.sign(jwtSignOpts, process.env.JWT_SECRET, jwtTokenOpts);

          return res.status(200).json({ msg: "Auth Success", token : token});
        }

        return res.status(401).json({ msg: "Auth Failed"});
      })
    }
  })
  .catch(err => {
    console.log(err);
		res.status(500).json({ error: err});
  })
}

exports.createUser = (req, res, next) => {
  if (!req.body.email || !req.body.password || !req.body.fullname){
    return res.status(500).json({msg: "Values Missing"});
  }

  User.find({ email: req.body.email })
  .then( result => {
    if (result.length > 1){
      return res.status(409).json({msg: "Email Taken", email_taken: true});
    } else {
      bcrypt.hash( req.body.password, 10, (err, hash) => {
        if (err) {
  				return res.status(500).json({ error: err})
  			} else {
          new User({
            _id : new mongoose.Types.ObjectId(),
            fullname : req.body.fullname,
  					email : req.body.email,
  					password :hash
          }).save()
          .then( result => {
            console.log(result);
  					res.status(201).json({ msg: "user created", user_created: true});
          })
          .catch( err => {
            console.log(err);
  					res.status(500).json({ error: err});
          });

        }
      })
    }

  })
  .catch( err => {
    res.status(500).json({ error: err});
    console.log(err);
  });
}
