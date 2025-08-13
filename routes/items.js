const express = require("express");
const router = express.Router();
const _ = require("lodash");

const items = require("../init_data.json").data;
let curId = _.size(items);

// GET all items
router.get("/", (req, res) => {
  res.json(_.toArray(items));
});

// POST new item
router.post("/", (req, res) => {
  const item = req.body;
  curId += 1;
  item.id = curId;
  items[item.id] = item;
  res.json(item);
});

// GET item by id
router.get("/:id", (req, res) => {
  const item = items[req.params.id];
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// DELETE item
router.delete("/:id", (req, res) => {
  const item = items[req.params.id];
  delete items[item.id];
  res.status(204).json(item);
});

module.exports = router;
