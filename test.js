const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect db

mongoose.connect('mongodb://localhost/pcat-test-db');

// create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 Lorem Ipsum',
// });

// read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// update a photo
// const id = '61c1cd1ecbf9fc06c0d0128d';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 111 Updated',
//     description: 'Photo Description 111 Updated',
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

// delete a photo
// const id = '61c1cee532d51e9b22142369';
// Photo.findByIdAndDelete(id, (err, data) => {
//   console.log('Photo is removed');
// });
