var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      title: 'RoomKit'
  });
});
router.get('/profile', function(req, res) {
    res.render('profile', {
        user : req.user
    });
});

module.exports = router;
