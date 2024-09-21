const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Shaan8008:5hXXzON2gBXrKLJ0@shaan.capnwx7.mongodb.net/?retryWrites=true&w=majority&appName=Shaan", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;