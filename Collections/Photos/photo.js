const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//create new Schema for Photos
let PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

//creating Model for Photo
let Photo = mongoose.model('photos', PhotoSchema);

module.exports = Photo;
