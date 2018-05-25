const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/userController');

userRouter.post('/signup',  usersController.createUser);

userRouter.post('/authenticate', usersController.loginUser);

module.exports = userRouter;
