const express = require('express');
const mongoose = require('mongoose');

const LiteratureSchema = new mongoose.Schema({
  name: {
    type: String
  },
  position: {
    type: String
  },
  description: {
    type: String
  },
  icon: {
    type: String
  },
  background: {
    type: String
  },
  profile: {
    type: String
  },
  publication: [{
    itemTitle: {
      type: String
    },
    itemSubtitle: {
      type: String
    },
    itemAuthor: {
      type: String
    },
    publisher: {
      type: String
    },
    publisherPlace: {
      type: String
    },
    publisherDate: {
      type: String
    },
    language: {
      type: String
    },
    itemCover: {
      type: String
    },
    itemLink: {
      type: String
    },
    itemSummary: {
      type: String
    }
  }]
});

const Literature = mongoose.model('Literature', LiteratureSchema);

module.exports = Literature;