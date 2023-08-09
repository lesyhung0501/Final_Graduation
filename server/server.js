const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const Fingerprint = require("express-fingerprint");
const cors = require('cors');
const port = 3000;

const app = express();

app.use(Fingerprint());

app.use(express.json());

const directory = path.join(__dirname, "./public");
console.log(directory);
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(cors({ origin: ['http://localhost:8080'], methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"]}))

app.use("/public", express.static(directory));

app.use("/api/v1", rootRouter);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
