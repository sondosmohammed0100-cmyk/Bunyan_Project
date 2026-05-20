//dotenv
require("dotenv").config();
//require express
const express = require("express");
const app = express();
app.use(express.json());


//simple logger
if (process.env.NODE_ENV === "dev") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
}

//routing project
app.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Test project" });
});

//Connection DB
const DB_Connection = require("./Config/DB_Connection");
DB_Connection();

//lisen on server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port---------> ${port}`);
});
