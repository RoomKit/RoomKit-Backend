var passport = require('passport');

exports.login = function (req, res) {
    res.render('login', {
        message: req.flash('loginMessage')
    })
};

exports.processLogin = passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});

exports.signup = function (req, res) {
    res.render('signup', {
        message: req.flash('signupMessage')
    });
};

exports.processSignup = passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/auth/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});

exports.profile = function (req, res) {
    res.render('profile', {
        user: req.user
    })
};

exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};