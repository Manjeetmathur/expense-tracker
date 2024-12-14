require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDb } = require("./db/db");
const { router } = require("./routes/transaction");
const {readdirSync} = require("fs")

const app = express();

app.use(
  cors({
    origin: "https://expense-tracker-0iby.onrender.com/",
    credentials: true,
  })
);

app.use(express.json());

readdirSync('./routes').map((route) => app.use('/api',router))

const PORT = process.env.PORT;
const server = () => {
  connectDb()
  app.listen(PORT, () => {
    console.log(`listning to port ${PORT}`);
  });
};
server();
