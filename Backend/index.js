require("dotenv").config();
const express = require("express");
const router = require("./routes");
const dbConnection = require("./config/dbConnection");
const app = express();

dbConnection();
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("working");
});

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl} - This route does not exist on the server.`,
  });
});

const port = 3000;

app.listen(port, () => {
  console.log("server is running");
});
