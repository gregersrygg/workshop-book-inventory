/*eslint camelcase: 0*/

module.exports = {
    name: 'book-service-gregers',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    /*config_vars: {
        MONGOLAB_URI: 'mongodb://heroku_cw2wjftc:c672kmdbcmhbmeuni1mpn1jsso@ds019478.mlab.com:19478/heroku_cw2wjftc'
    },*/
    addons: {
        mongolab: {
            plan: 'mongolab:sandbox'
        }
    },
    collaborators: ['gregersrygg@gmail.com', 'truls.henriksen@gmail.com'],
    features: {
        'runtime-dyno-metadata': {
            enabled: false
        },
        'log-runtime-metrics': {
            enabled: false
        },
        'http-session-affinity': {
            enabled: false
        },
        'preboot': {
            enabled: false
        },
        'http-shard-header': {
            enabled: false
        },
        'http-end-to-end-continue': {
            enabled: false
        }
    },
    formation: [{
        process: 'web',
        quantity: 1,
        size: 'Free'
    }],
    log_drains: []/*,
    domains: ['book-inventory-service-gregers.herokuapp.com']*/
};
