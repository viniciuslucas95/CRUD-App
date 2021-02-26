const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

const userRouter = require('./routes/User');

server.use(express.json());
server.use(cors());

mongoose.connect(
  'mongodb+srv://viniciuslucas:didimoco@mern-crud.sfsjt.mongodb.net/mern-crud?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

server.use('/user', userRouter);

server.listen(3001, () => {
  console.log('Server running on port 3001...');
});
