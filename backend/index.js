const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');


dotenv.config({ path: './config.env' });

const DATABASE = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.set('strictQuery', true);
mongoose.connect(DATABASE).then(console.log('Database is connected successfully...'));

module.exports.handler = serverless(app);