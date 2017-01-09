var express = require('express');
var router = express.Router();

var controller = require('./controller');

router.get('/login', controller.login);
router.get('/signup', controller.signup);
router.get('/profile', isLoggedIn, controller.profile);
router.get('/logout', controller.logout);

router.post('/login', controller.processLogin);
router.post('/signup', controller.processSignup);

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;