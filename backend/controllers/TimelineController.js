const express = require('express');
const Timeline = require('./../models/TimelineModel');


exports.getAllTimeline = async (req, res, next) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    // filter 
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    let query = Timeline.find(JSON.parse(queryStr));

    // sort - only date sorting is allowed
    query = query.sort("date");

    const details = await query;
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
