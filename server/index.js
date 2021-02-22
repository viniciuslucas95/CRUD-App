const express = require('express');
const mongoose = require('mongoose');
const app = express();

const UserModel = require('./models/User');

app.use(express.json());

mongoose.connect(
  'mongodb+srv://viniciuslucas:didimoco@mern-crud.sfsjt.mongodb.net/mern-crud?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get('/', async (req, res) => {
  const user = new UserModel({ username: 'test', password: '123' });

  try {
    await user.save();
    res.send('inserted data');
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001...');
});
