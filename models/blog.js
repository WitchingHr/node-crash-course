const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for the blog
const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true });

// model based on the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;