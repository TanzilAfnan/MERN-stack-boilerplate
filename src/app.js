const express = require("express");
const mongoose = require("mongoose");

// Importing the Routes
// const users = require("../routes/api/users");
const users = require("./routes/api/users");

// Importing Other files
const keys = require("./config/keys");
const dbConnect = require("./helpers/dbConnect");

const app = express();

// DB Config
dbConnect(keys.mongodb.dbURL);

// Using routers
app.use("/api/users", users);

module.exports = app;
