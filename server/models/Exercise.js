const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const exerciseSchema = new Schema(
  {
    description: {
      type: String,
      required: 'You need to leave a description!',
      minlength: 1,
      maxlength: 280
    },
    date: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    }
    
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
