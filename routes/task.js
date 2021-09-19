const taskController = require('../controllers/task');
const taskValidation = require('../controllers/middleware/validation/task');
const router = require('express').Router();

router.post('/', taskValidation.add, taskController.add);

module.exports = router;
