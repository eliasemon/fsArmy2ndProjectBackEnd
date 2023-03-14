const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    // immutable: true
  },
  name: {
    type: String,
    required: true
  },
  avaterUrl: {
    type: String,
  },
  skills : {
    type : Array
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Common'],
    default: 'Male'
  },
  universityName : {
    type : String
  },
  profession : {
    type : String
  },
  email: {
    type: String,
    unique: true,
    immutable: false
  },
  phoneNumber: {
    type: String,
    unique: true,
    immutable: false
  },
  googleMeetLink: {
    type: String,
    required: true
  },
  completedPeer: {
    type: Number,
    required: true,
    default: 0
  },
  timeInPeerInMinutes: {
    type: Number,
    required: true,
    default: 0
  },
  isInPeer: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: { type: Date, required: true, default: () => Date.now() , immutable: true }
}, {_id : false ,  strict: true});

const User = mongoose.model('User', userSchema);

module.exports = User;