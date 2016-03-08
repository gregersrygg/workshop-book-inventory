const heroin = require('heroin-js');
const PROD = require('./prod.js');
const TEST = require('./test.js');

const env = process.argv[2];

const configurator = heroin(process.env.HEROKU_API_TOKEN, {
    debug: false
});

if (env === 'prod') {
    console.log('prod');
    configurator(PROD);
} else if (env === 'test') {
    console.log('test');
    configurator(TEST);
} else {
    console.error('No env specified');
    process.exit(1);
}


/*configurator.export('book-inventory-service-gregers').then(function(result) {
    console.log(result);
});*/
