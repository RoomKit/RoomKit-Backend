module.exports = function(app) {
    app.use('/', require('./routes'));
    // app.use('/view', require('./routes/public/view'));

    // app.use('/api/email', require('./routes/api/email'));

    app.use('/auth', require('./routes/auth'));
    app.use('/auth/customer', require('./routes/auth/customer'));
};