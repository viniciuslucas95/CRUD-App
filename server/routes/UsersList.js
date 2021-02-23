const express = require('express');
const path = require('path');
const UserModel = require('../models/User');

const router = express.Router();

router.get('/users-list', async function (req, res) {
  UserModel.find({}, (err, result) => {
    if (err) res.send(err);

    res.send(result);
  });
});

module.exports = router;
