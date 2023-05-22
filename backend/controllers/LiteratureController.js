const express = require('express');
const Literature = require('./../models/LiteratureModel');

exports.getAllLiterature = async (req, res, next) => {
  const details = await Literature.find();
  try {
    res.status(200).json({
      status: 'success',
      result: details.length,
      data: {
        details
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};