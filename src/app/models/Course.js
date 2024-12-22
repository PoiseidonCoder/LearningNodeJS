const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const Course = new Schema({
  name: {type: String, length: 255},
  body: {type: String, length: 600},
  image: {type: String, length: 255},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
})
module.exports = mongoose.model('Course', Course);