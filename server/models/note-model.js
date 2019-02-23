'use strict';
let mongoose = require('mongoose');

let note = new mongoose.Schema({
  title: String,
  content: String,
  created_at: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('Note', note);
