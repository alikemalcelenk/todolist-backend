const Task = require('../models/Task');

exports.add = (req, res) => {
  const { description } = req.body;

  const newTask = new Task({
    description,
  });

  newTask
    .save()
    .then((task) => {
      if (task.description) {
        res.json({ task });
      } else {
        res.status(500).json();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
