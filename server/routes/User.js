const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const VerifyToken = require('./VerifyToken');

const UserModel = require('../models/User');
const { ValidateUser } = require('../Validation');

const router = express.Router();

router.get('/', async function (req, res) {
  const username = req.query.username;
  const password = req.query.password;

  const error = ValidateUser({ username: username, password: password });

  if (error !== '') return res.status(400).send(error);

  const user = await UserModel.findOne({ username: username });

  if (!user) return res.status(400).send('Username or password is wrong.');

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(400).send('Username or password is wrong.');

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.send(token);
});

router.post('/', async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const error = ValidateUser({ username: username, password: password });

  if (error !== '') return res.status(400).send(error);

  try {
    if (await UserModel.findOne({ username: username })) {
      return res.status(400).send('User already exists.');
    }
  } catch (err) {
    res.status(400).send(err);
    return;
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    username: username,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.send(newUser._id);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/', VerifyToken, async function (req, res) {
  try {
    await UserModel.deleteOne({ _id: req.body.id });
    res.send('User deleted.');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/list', VerifyToken, async function (req, res) {
  try {
    res.send(await UserModel.find({}));
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
