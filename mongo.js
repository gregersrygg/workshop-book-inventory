'use strict';
var MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://localhost:27017/books';

MongoClient.connect(MONGO_URL, function (err, db) {
    db.collection('books').find({}).toArray((err, docs) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.dir(docs);
        process.exit(0);
    });
});
