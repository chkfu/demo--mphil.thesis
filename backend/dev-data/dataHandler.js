const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const HomeMap = require('./../models/HomeMapModel');
const Timeline = require('./../models/TimelineModel');
const Literature = require('./../models/LiteratureModel');

dotenv.config({ path: './config.env' });

const DATABASE = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.set('strictQuery', true);
mongoose.connect(DATABASE).then(console.log('Database is connected successfully...'));


const data = JSON.parse(fs.readFileSync(`${__dirname}/literature.json`, 'utf-8'));

const importData = async () => {
  try {
    await Literature.create(data);
    console.log('data is imported successfully...');
  }
  catch (error) {
    console.log(error);
  }
  process.exit();
};


const deleteData = async () => {
  try {
    await Literature.deleteMany();
    console.log('data is deleted successfully...');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
}
else if (process.argv[2] === '--delete') {
  deleteData();
}