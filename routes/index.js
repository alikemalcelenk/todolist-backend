const indexController = require('../controllers/index');
const router = require('express').Router();

router.get('/', indexController);

module.exports = router;
