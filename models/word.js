const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WordSchema = new Schema({
  geez: {
    type: String,
    required: false,
  },
  amharic: {
    type: String,
    required: true,
  },
  english: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = Word = mongoose.model("word", WordSchema);
