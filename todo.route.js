const express = require("express");
const router = express.Router();
const List = require("./todo.model");

router.post("/add", async (req, res) => {
  try {
    const newList = new List({
      text: req.body.title,
      user: req.body.user,
    });
    const list = await newList.save();
    console.log(list);
    res.status(201).json(list);
  } catch (err) {
    res.status(400).send("Error: " + err);
  }
  res.end();
});

router.get("/add", async (req, res) => {
    try {
      const newList = new List({
        text: req.body.title,
        user: req.body.user,
      });
      const list = await newList.save();
      console.log(list);
      res.status(201).json(list);
    } catch (err) {
      res.status(400).send("Error: " + err);
    }
    res.end();
  });

module.exports = router;