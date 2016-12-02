var https = require('https');
var querystring = require('querystring');
var particle = require(__base + 'config/particle');

exports.createShadowCustomer = function (req, res) {
    //POST: req.body.x

    var email = req.body.email;
    var token = process.env.PARTICLE_CLIENT_ID + ":" + process.env.PARTICLE_CLIENT_SECRET;

    console.log(email);

    var data = querystring.stringify({
        // 'productIdOrSlug' : process.env.PARTICLE_CLIENT_ID,
        'productIdOrSlug' : 'RoomKit',
        'client_id': process.env.PARTICLE_CLIENT_ID,
        'client_secret': process.env.PARTICLE_CLIENT_SECRET,
        'email': email,
        'no_password' : 'true'
    });

    var options = {
        hostname: 'api.particle.io',
        port: 443,
        path: '/v1/products/'+process.env.PARTICLE_ORG_SLUG+'/customers',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    // Set up the request
    var request = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    request.write(data);
    request.end();

    var response = {
        email: email,
        token: token
    };


    res.send(response);
};

exports.getCustomers = function (req, res) {
    var data = querystring.stringify({
        'productIdOrSlug' : process.env.PARTICLE_CLIENT_ID
        // 'productIdOrSlug' : 'RoomKit'
    });

    var options = {
        hostname: 'api.particle.io',
        port: 443,
        path: '/v1/products/'+process.env.PARTICLE_ORG_SLUG+'/customers',
        method: 'GET',
        headers: {
            accept: '*/*'
        }
    };

    // Set up the request
    var request = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    request.end();

    res.send('ok!');
};
