const express = require('express');
const mongoose = require('mongoose');

const HomeMapSchema = new mongoose.Schema({

  // For Section Map Display 
  nameEng: {
    type: String,
  },
  nameChi: {
    type: String
  },
  category: {
    type: String,
  },
  location: {
    type: String,
  },
  director: {
    type: String
  },
  chiefManager: {
    type: String
  },
  principal: {
    type: String
  },
  numOfStds: {
    type: Number
  },
  numOfGrads: {
    type: Number
  },
  numOfSchools: {
    type: Number
  },
  numOfStaff: {
    type: Number
  },
  annualExpense: {
    type: Number
  },
  period: {
    type: String,
  },
  year: {
    type: String
  },
  reportedAt: {
    type: String
  },
  faction: {
    type: String
  },
  session: {
    type: String
  },
  remarks: {
    type: String
  },
  coordinates: {
    type: Array,
    required: true
  },
  type: {
    type: String
  },

  // For GeoLayers
  primaryNameEng: {
    type: String,
  },
  primaryNameChi: {
    type: String,
  },
  primaryNumOfSchools: {
    type: Number,
  },
  primaryNumOfGrads: {
    type: Number,
  },
  primaryNumOfStds: {
    type: Number,
  },
  primaryNumOfStaff: {
    type: Number,
  },
  primaryAnnualExpense: {
    type: Number,
  },
  primaryYear: {
    type: String,
  },
  primaryReportedAt: {
    type: String,
  },
  secondaryNameEng: {
    type: String,
  },
  secondaryNameChi: {
    type: String,
  },
  secondaryNumOfStaff: {
    type: Number,
  },
  secondaryAnnualExpense: {
    type: Number,
  },
  secondaryNumOfStds: {
    type: Number,
  },
  secondaryNumOfGrads: {
    type: Number,
  },
  secondaryReportedAt: {
    type: String,
  },
  secondaryInfluencedBy: {
    type: String,
  },
  secondaryRemarks: {
    type: String,
  },
  secondaryDirector: {
    type: String,
  },
  tertiaryNameEng: {
    type: String,
  },
  tertiaryNameChi: {
    type: String,
  },
  tertiaryYear: {
    type: String,
  },
  tertiaryDirector: {
    type: String,
  },
  tertiaryInfluencedBy: {
    type: String,
  },
  tertiaryRemarks: {
    type: String,
  },
});


const HomeMap = mongoose.model('HomeMap', HomeMapSchema);

module.exports = HomeMap;