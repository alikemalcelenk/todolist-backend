const router = require('express').Router()
const taskController = require('../controllers/task')
const taskValidation = require('../controllers/middleware/validation/task')

router.post('/', taskValidation.add, taskController.add)
router.get('/', taskController.get)

module.exports = router
