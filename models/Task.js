const mongoose = require('mongoose')

const { Schema } = mongoose

const TaskSchema = new Schema({
  description: {
    type: String,
    required: [true, '`{PATH}` is necessary.']
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Task', TaskSchema)
