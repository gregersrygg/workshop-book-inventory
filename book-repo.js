var MongoClient = require('mongodb').MongoClient;

const MONGO_URL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/books';
var collection = MongoClient.connect(MONGO_URL).then((db) => db.collection('books'));

module.exports = {
    updateBook (isbn, count) {
        return collection.then((books) => books.updateOne({ isbn }, { isbn, count }, { upsert: true }));
    },
    listBooks () {
        return collection.then((books) => books.find({}).toArray());
    },
    getCount (isbn) {
        return collection.then((books) => books.find({ isbn }).limit(1).next())
        .then((book) => book.count);
    }
};
