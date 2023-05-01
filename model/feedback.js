const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  },
  // other attributes...
});

const Feedback = mongoose.model('User', FeedbackSchema);

module.exports = Feedback;
