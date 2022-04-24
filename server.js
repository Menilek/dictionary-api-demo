const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const words = require("./routes/api/words");
// const { seedDatabase, emptyDatabase } = require("./scripts/db");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const url = process.env.MONGODB_URI;
// const url = 'mongodb://localhost:27017/words';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/words", words);

// seedDatabase();
// emptyDatabase();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("../../frontend/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));
