const Task = require("../models/tasks.model");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/custom-errors");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

module.exports = {
  getAllTasks,
};
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task found`, 404));
  }

  res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task found`, 404));
  }

  res.status(200).json({ task });
});
const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.status(200).json({ task });
});

const createTask = async (req,res)=>{
  const task = await Task.create(req.body)
  res.status(201).json(task)
}

module.exports = {
  updateTask,
  getAllTasks,
  getTask,
  createTask
};
