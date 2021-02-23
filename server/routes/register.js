const express = require('express');
const path = require('path');
const UserModel = require('../models/User');

const router = express.Router();

router.post('/register', async function (req, res) {
  if (req.body.username === '' || req.body.password === '') return;

  const newUser = new UserModel({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    await newUser.save();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
