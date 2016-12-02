var Particle = require('particle-api-js');
exports.particle = new Particle({
    clientSecret: process.env.PARTICLE_CLIENT_SECRET,
    clientId: process.env.PARTICLE_CLIENT_SECRET,
});