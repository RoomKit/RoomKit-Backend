var express = require('express');
var router = express.Router();

var controller = require('./controller');

router.post('/', controller.createShadowCustomer);
router.get('/', controller.getCustomers);

module.exports = router;