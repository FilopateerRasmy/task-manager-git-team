const express = require("express");
const { updateTask, getAllTasks } = require("../controllers/tasks.controllers");
const router = express.Router();

router.route("/:id").patch(updateTask);

router.route("/").get(getAllTasks);
module.exports = router;
