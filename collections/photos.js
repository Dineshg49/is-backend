const mongoose = require('mongoose');
const db = require('../db');

const photoSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  data: {
    type: Buffer,
    required: true
  }
});

const Photo = db.model('Photo', photoSchema);


module.exports = Photo;
