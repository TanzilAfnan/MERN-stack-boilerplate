const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  // res.json({ mes: "users works" });
  const users = [
    { id: 1, firstName: "Bruce", lastName: "Wayne" },
    { id: 2, firstName: "Clark", lastName: "Kent" },
    { id: 3, firstName: "Wade", lastName: "Wilson" },
    { id: 4, firstName: "Barry", lastName: "Allen" },
    { id: 5, firstName: "Tony", lastName: "Stark" },
    { id: 6, firstName: "Harry", lastName: "Potter" },
  ];

  res.json(users);
});

module.exports = router;
