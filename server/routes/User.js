const express = require('express');

const UserModel = require('../models/User');
const { ValidateUser } = require('../Validation');

const router = express.Router();

router.get('/', async function (req, res) {
  const username = req.query.username;
  const password = req.query.password;

  const error = ValidateUser({ username: username, password: password });

  if (error !== '') return res.status(400).send(error);

  const userExists = await UserModel.findOne({ username: username });

  if (!userExists || password !== userExists.password)
    return res.status(400).send('Username or password is wrong.');

  res.status(200).send('Logged in.');
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

  const newUser = new UserModel({
    username: username,
    password: password,
  });

  try {
    res.send(await newUser.save());
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/list', async function (req, res) {
  try {
    const users = await UserModel.find({});

    if (users.length === 0)
      res.status(400).send('There is no user registered.');
    else res.send(users);
  } catch (err) {
    res.status(400).end(err);
  }
});

module.exports = router;
