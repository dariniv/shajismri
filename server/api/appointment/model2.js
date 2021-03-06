
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var appointmentSchema = new mongoose.Schema({
  date: Date,
  name: String,
  phone: String,
  status: Boolean
});

// Return model
module.exports = restful.model('aappointments', appointmentSchema);
//module.exports = restful.model('aappointments', appointmentSchema);