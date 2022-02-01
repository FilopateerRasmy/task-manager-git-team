const express = require("express");
const {
  updateTask,
  getAllTasks,
  getTask,
} = require("../controllers/tasks.controllers");
const router = express.Router();

router.route("/:id").patch(updateTask);

router.route("/").get(getAllTasks);
router.route("/:id").get(getTask);
module.exports = router;
