const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupDiscussionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  googleMeetLink: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  categories: [{
    type: String,
    required: true
  }]
});

module.exports = mongoose.model('GroupDiscussion', groupDiscussionSchema);