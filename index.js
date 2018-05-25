const express = require('express');
const app = express();
const envvars = require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const checkAuthJwt = require('./middleware/checkAuthJwt');

//connect to mlab
const MLABConnection = require('./config/mlab_connection');

//use logging
app.use(morgan('dev'));

//resolve cors
app.use(cors());

//Setup body parser, get data from form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//register, authenticate user
app.use('/api/users', userRoutes);

//use route protection on appointments
app.use('/api/appointments', checkAuthJwt, appointmentRoutes);

//start server on port
app.listen(port, () => console.log(`Server Running on ${port}`));
