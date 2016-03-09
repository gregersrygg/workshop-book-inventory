/*eslint camelcase: 0*/

const BASECONF = require('./baseconfig.js');
module.exports = Object.assign({}, BASECONF, {
    log_drains: ['syslog://data.logentries.com:13636']
});
