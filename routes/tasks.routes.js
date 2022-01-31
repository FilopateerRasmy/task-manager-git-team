const express = require('express');
const router = express.Router();

const {getAllTasks} = require('../controllers/tasks.controllers')
router.route('/').get(getAllTasks)
module.exports = router;