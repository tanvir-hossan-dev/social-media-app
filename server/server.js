require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rootRouter = require("./routers/index");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use(rootRouter);

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`port ${port} is listening`);
    });
  })
  .catch((err) => {
    console.log("Mongoose Error");
  });
