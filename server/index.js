const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const registerRouter = require('./routes/RegisterUser');
const userListRouter = require('./routes/UsersList');

app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://viniciuslucas:didimoco@mern-crud.sfsjt.mongodb.net/mern-crud?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(registerRouter);
app.use(userListRouter);

app.listen(3001, () => {
  console.log('Server running on port 3001...');
});
