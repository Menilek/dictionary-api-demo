const Word = require("./models/word");
const words = require("./amharic.json");

// const words = [
//   {
//     amharic: "Metegen",
//     geez: "መጠገን",
//     english: "Fix",
//     category: "verb",
//   },
// ];

exports.seedDatabase = async () => {
  await Word.insertMany(words);
};

exports.emptyDatabase = async () => {
  await Word.deleteMany();
};
