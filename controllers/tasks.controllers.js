const Task = require("../models/tasks.model");
const asyncWrapper = require("../middlewares/async");
const {createCustomError} = require('../errors/custom-errors')


const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  })

const getTask= asyncWrapper(async (req, res) => {
    const task = await Task.findById(req.params.id)
    res.status(200).json({ task })
  })
  
  module.exports = {
    getAllTasks,
    getTask
  };