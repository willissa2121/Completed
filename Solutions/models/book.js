const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema for mongoos database structure to create book object to allow for consisten population of data onto the correct page (when url is books/:id), so that regardless of book we can populate page correctly, or else value will be null and 404 page will be hit


const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

//exported object will always be called book for consistency
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
