var express = require('express');
var router = express.Router();
var api = require('../api/messages');
// Need to add a database

router.route('/')
.get(api.getMsgs) // get request..
.post(api.createMsg)

router.route('/:id')
.delete(api.deleteMsg)

module.exports = router;
