const express = require('express');
const HomeMap = require('./../models/HomeMapModel');


exports.getHomeMap_LateQingPeriod = async (req, res, next) => {
  try {
    const details = await HomeMap.find({ period: 'Late Qing Period' });
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

exports.getHomeMap_PrewarPeriod = async (req, res, next) => {
  try {
    const details = await HomeMap.find({
      "$or":
        [{
          period: 'Pre-war Nanking Period',
          nameEng: "Provincial Police Academy"
        }, {
          period: 'Pre-war Nanking Period',
          nameEng: "National Higher Police Academy"
        }]
    });
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

exports.getHomeMap_WartimePeriod = async (req, res, next) => {
  try {
    const details = await HomeMap.find({
      period: 'Wartime Chungking Period',
      category: 'Academy'
    });
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

exports.getHomeMap_AllData = async (req, res, next) => {
  try {
    const details = await HomeMap.find();
    res.status(200).json({
      status: 'success',
      result: details.length,
      data: {
        details
      }
    });
  }
  catch (error) {
    console.log(error);
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};

exports.getStatisticMap_StatLayer = async (req, res, next) => {
  try {
    const details = await HomeMap.find({
      category: 'geoLayer'
    });
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
