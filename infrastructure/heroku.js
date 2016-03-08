const heroin = require('heroin-js');
const PROD = require('./prod.js');
const TEST = require('./test.js');

const configurator = heroin(process.env.HEROKU_API_TOKEN, {
    debug: false
});

configurator(PROD);
configurator(TEST);

/*configurator.export('book-inventory-service-gregers').then(function(result) {
    console.log(result);
});*/
