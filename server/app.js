const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const cors = require("cors");
const routes = require("./router/auth");
const app = express();

dotenv.config({ path: "./config.env" });
require("./DB/connect");



app.use(cors());
app.use(express.static(path.join(__dirname + "../client/src")));

const PORT = process.env.PORT;



app.use("/DA-FacTory",routes);

app.listen(PORT, () => {
  console.log(`DA-FacTory Server is running on "http://localhost:${PORT}/DA-FacTory"...`);
});
