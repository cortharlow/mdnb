'use strict';
let express = require('express');
let router = express.Router();
let note = require('../controllers/note-controller');

router.route('/notes')
  .get(note.get)

router.route('/notes/create')
  .post(note.create)

module.exports = router;
