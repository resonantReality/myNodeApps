const Pulser = require('./pulser');

const pulser = new Pulser();

pulser.on('pulse', () => {

    console.log(`${new Date().toISOString()} pulse received`);
});

pulser.start();