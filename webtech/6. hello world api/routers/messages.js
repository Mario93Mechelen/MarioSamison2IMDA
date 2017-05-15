// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router()
var controller = require('../controllers/message')
var Message = require('../models/message');
var mongoose = require('mongoose');

router.get('/', controller.show);
router.post('/', controller.createAndShow);
router.post('/output', controller.create);
router.get('/output', controller.getAll);
router.get('/:id', controller.getMessageById);
router.get('/user/:user', controller.getMessageByUser);
router.put('/:id', controller.updateMessage);
router.delete('/:id', controller.deleteMessage);

module.exports = router;