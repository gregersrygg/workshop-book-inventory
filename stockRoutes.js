var express = require('express');
var router = express.Router();

module.exports = function (bookRepo) {

    router.post('/', (req, res, next) => {
        const isbn = req.body.isbn;
        const count = req.body.count;
        const book = {isbn, count};

        bookRepo.updateBook(isbn, count)
        .then(() => {
            res.json(book);
        }).catch(next);
    });

    router.get('/', (req, res, next) => {
        bookRepo.listBooks()
        .then((books) => {
            res.json(books);
        }).catch(next);
    });

    router.get('/:isbn', (req, res, next) => {
        bookRepo.getCount(req.params.isbn).then((count) => {
            res.json(count);
        }).catch(function (err) {
            console.err(err);
            res.status = 404;
            res.send('Book not found');
        });
    });

    return router;
};
