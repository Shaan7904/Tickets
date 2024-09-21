const express = require('express');
const bodyParser = require('body-parser');
const Ticket = require('./models/Ticket'); // Ticket model
const db = require('./db');  // MongoDB connection

const app = express();
app.use(bodyParser.json()); // Parse JSON bodies

// 1. Create a new ticket
app.post('/tickets', async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).send(ticket);
  } catch (error) {
    res.status(400).send(error);  // Bad request error handling
  }
});

// 2. Get all tickets
app.get('/tickets', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.send(tickets);
  } catch (error) {
    res.status(500).send(error);  // Internal server error
  }
});

// 3. Get a ticket by ID
app.get('/tickets/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).send();  // Not found error
    res.send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 4. Update a ticket by ID
app.patch('/tickets/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ticket) return res.status(404).send();
    res.send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

// 5. Delete a ticket by ID
app.delete('/tickets/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).send();
    res.send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});