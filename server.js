// const express = require("express");

// const app = express();

// const port = 5000;

// app.get("/api/customers", (req, res) => {
//   const customers = [
//     { id: 1, firstName: "Bruce", lastName: "Wayne" },
//     { id: 2, firstName: "Clark", lastName: "Kent" },
//     { id: 3, firstName: "Wade", lastName: "Wilson" },
//     { id: 3, firstName: "Barry", lastName: "Allen" },
//   ];

//   res.json(customers);
// });

// app.listen(port, () => {
//   console.log(`Server is listening for request @ port ${port}`);
// });

const dotenv = require("dotenv");
const app = require("./src/app");

// initialize configuration
dotenv.config();
const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));
