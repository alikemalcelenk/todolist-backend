const Task = require('../models/Task')

exports.add = (req, res) => {
  const { description } = req.body

  const newTask = new Task({
    description
  })

  newTask
    .save()
    .then((task) => {
      if (task.description) {
        res.json({ task })
      } else {
        res.status(500).json()
      }
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}

exports.get = (req, res) => {
  const promise = Task.find({}).sort('-created_at')

  promise
    .then((data) => {
      res.json({ tasks: data })
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}

exports.update = (req, res) => {
  const { id } = req.params

  Task.findByIdAndUpdate(id, req.body, { new: true })
    .then((task) => {
      if (task != null) {
        res.json({ task })
      } else {
        res.status(500).json()
      }
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}
