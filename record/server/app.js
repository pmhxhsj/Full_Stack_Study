const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const basic = require("./route/index");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/", basic);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
