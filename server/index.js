const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRouter = require('./routes/User');

const server = express();
dotenv.config();

server.use(express.json());
server.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.sfsjt.mongodb.net/cruddb?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

server.use('/user', userRouter);

server.listen(3001, () => {
  console.log('Server running on port 3001...');
});
