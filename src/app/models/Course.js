const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const Course = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  image: {type: String},
  videoId: {type: String, required: true},
  level: {type: String},
  // slug : name là để lấy name cho slug
  slug: { type: String, slug: "name", unique: true },
},{timestamps: true})
module.exports = mongoose.model('Course', Course);