const Joi = require('joi')

exports.add = (req, res, next) => {
  const addSchema = Joi.object().keys({
    description: Joi.string().trim().max(600).required()
  })

  addSchema
    .validateAsync(req.body)
    .then(() => {
      next()
    })
    .catch(() => {
      res.status(500).json({ error: 'Validation Error' })
    })
}

exports.update = (req, res, next) => {
  const updateBodySchema = Joi.object().keys({
    description: Joi.string().trim().max(600),
    isCompleted: Joi.boolean()
  })

  const updateParamsSchema = Joi.object().keys({
    id: Joi.string().required().length(24)
  })

  updateBodySchema
    .validateAsync(req.body)
    .then(() => {
      updateParamsSchema
        .validateAsync(req.params)
        .then(() => {
          next()
        })
        .catch(() => {
          res.status(500).json({ error: 'Validation Error' })
        })
    })
    .catch(() => {
      res.status(500).json({ error: 'Validation Error' })
    })
}
