const express = require('express');
const mongoose = require('mongoose');

const TimelineSchema = new mongoose.Schema({
  title: {
    type: "String",
    require: [true, "Timeline Title is required."]
  },
  subtitle: {
    type: "String",
    require: [true, "Timeline Subtitle is required."]
  },
  date: {
    type: "String",
    require: [true, "Timeline Date is required."]
  },
  content: {
    type: "String",
    require: [true, "Timeline Date is required."]
  },
  category: {
    type: "String",
    require: [true, "Timeline Category is required."]
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
);

TimelineSchema.virtual('period').get(function () {
  if (this.date < 1912)
    return 'Late Qing Period';
  if (this.date >= 1912 && this.date < 1928)
    return 'Beiyang Period';
  if (this.date >= 1928 && this.date <= 1949)
    return 'Nationalist Period';
  return 'none';
});

const Timeline = mongoose.model('Timeline', TimelineSchema);

module.exports = Timeline;