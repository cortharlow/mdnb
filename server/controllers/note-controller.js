'use strict';
const request = require('request');
const bodyParser = require('body-parser');
let Note = require('../models/note-model');

function create(req, res) {
  let noteToSave = new Note({
    title: req.body.title,
    content: req.body.content
  });
  noteToSave.save((err) => {
    if (err) return next(err);
    res.status(200).send(noteToSave);
  })
}

function get(req, res) {
  Note.find({}, (err, notes) => {
    console.log(notes);
    if (err) return next(err);
    res.send(notes);
  });
}

module.exports = {
  create: create,
  get: get
}
