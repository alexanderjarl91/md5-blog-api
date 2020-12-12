const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());

//import routers
const postsRoute = require("./routes/posts");

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/posts", postsRoute);

//connect to db secretly with dotenv
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

app.get("/", (req, res) => {
  res.send("HOME");
});

//listen to the server at port 3000

const port = process.env.PORT || 3000;
app.listen(port);
