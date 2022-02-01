const express = require('express');
const router = express.Router();

const {getAllTasks, getTask} = require('../controllers/tasks.controllers')
router.route('/').get(getAllTasks)
router.route('/:id').get(getTask)
module.exports = router;