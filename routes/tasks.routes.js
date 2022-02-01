const express = require("express");
const {
  updateTask,
  getAllTasks,
  getTask,
  createTask
} = require("../controllers/tasks.controllers");
const router = express.Router();

router.route("/:id").patch(updateTask);

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask);
module.exports = router;
