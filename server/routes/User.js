const express = require('express');
const UserModel = require('../models/User');

const router = express.Router();

router.get('/', function (req, res) {
  const username = req.query.username;
  const password = req.query.password;

  UserModel.findOne({ username: username })
    .exec()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.post('/', function (req, res) {
  new UserModel({
    username: req.body.username,
    password: req.body.password,
  })
    .save()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.get('/list', function (req, res) {
  UserModel.find({}, function (err, result) {
    if (err) res.send(err);

    res.send(result);
  });
});

module.exports = router;
