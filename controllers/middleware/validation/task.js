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
