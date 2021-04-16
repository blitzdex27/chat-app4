const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: Object,
  receipient: Object,
  date: String,
  time: String,
  content: String,
  sortInput: Number,
});

new mongoose.model('Message', messageSchema);
