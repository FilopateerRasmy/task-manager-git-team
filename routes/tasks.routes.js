const express = require("express");
const { updateTask } = require("../controllers/tasks.controllers");
const router = express.Router();

router.route("/:id").patch(updateTask);

module.exports = router;
