const mongoose = require('mongoose');

const peerInstanceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now()
  },
  topics: {
    type: [String],
    required: true
  },
  description: {
    type: String,
  },
  categories: {
    type: [String],
    required: true
  },
  googleMeetLink: {
    type: String,
    required: true
  },
  requestingUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  acceptedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  response: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: []
  }],
  expiresTime: {
    type: Date,
    required: true
  }
});

const PeerInstance = mongoose.model('PeerInstance', peerInstanceSchema);

module.exports = PeerInstance;