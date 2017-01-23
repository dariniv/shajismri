
// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Appointment = require('./model');
var Appointment1 = require('./model2');
Appointment.methods(['get', 'put', 'post', 'delete']);
Appointment1.methods(['get', 'put', 'post', 'delete']);
Appointment.register(router, '/mappointments');
Appointment1.register(router, '/aappointments');

// Return router
module.exports = router;
