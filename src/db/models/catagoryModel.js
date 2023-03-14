const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, {_id: false});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;