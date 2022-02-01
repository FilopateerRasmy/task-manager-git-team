const Task = require("../models/tasks.model");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/custom-errors");
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

module.exports = {
  updateTask,
};
