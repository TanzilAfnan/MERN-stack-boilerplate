const mongoose = require("mongoose");

const connectToDb = (dbURL) => {
  try {
    mongoose
      .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((data) => {
        // console.log(`inside dbConnect(): `, data);
        return console.log(`Successfully connected to The database`);
      })
      .catch((error) => {
        console.log("Error connecting to database: ", error);
        return process.exit(1);
      });
  } catch (err) {
    console.log("Error connecting to database: ", err);
  }
};

const connect = (dbURL) => {
  connectToDb(dbURL);
  mongoose.connection.on("disconnected", connectToDb);
};

module.exports = connect;
