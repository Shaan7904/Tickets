const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },   // Title of the ticket (required)
  description: String,                       // Detailed description
  status: { type: String, default: 'open' }, // Default status of the ticket is 'open'
  createdAt: { type: Date, default: Date.now },  // Date of creation
  updatedAt: { type: Date, default: Date.now }   // Date of last update
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;