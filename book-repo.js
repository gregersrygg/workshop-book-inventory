var MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017/books';
var collection = MongoClient.connect(MONGO_URL).then((db) => {
    return db.collection('books');
});

module.exports = {
    updateBook (isbn, count) {
        return collection.then((books) => {
            return books.updateOne({ isbn },
                {isbn, count},
                {upsert: true});
        });
    },
    listBooks () {
        return collection.then((books) => {
            return books.find({}).toArray();
        });
    },
    getCount (isbn) {
        return collection.then((books) => {
            return books.find({"isbn": isbn}).limit(1).next();
        }).then((book) => {
            return book.count;
        });
    }
};
