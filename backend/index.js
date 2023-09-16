const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');


dotenv.config({ path: './config.env' });

const DATABASE = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.set('strictQuery', true);
mongoose.connect(DATABASE).then(console.log('Database is connected successfully...'));

const PORT = 4000;
app.listen(process.env.DATABASE_PORT, () => {
  console.log(`App listening to port ${process.env.DATABASE_PORT}...`);
});