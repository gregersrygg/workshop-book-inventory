/*eslint new-cap: 0*/
var express = require('express');
var router = express.Router();

module.exports = function (bookRepo) {

    router.post('/', (req, res, next) => {
        const isbn = req.body.isbn;
        const count = req.body.count;
        const book = { isbn, count };

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

    router.get('/:isbn', (req, res) => {
        console.log(`ISBN ${req.params.isbn}`);
        bookRepo.getCount(req.params.isbn).then(count => {
            console.log(`ISBN count ${count} ${typeof count}`);
            res.format({
                text: () => res.send(count),
                html: () => res.send(`<b>${count}</b>`),
                json: () => res.json(count),
                default: () => res.status(406).send('Not Acceptable')
            });
        }).catch(function (err) {
            console.err(err);
            res.status = 404;
            res.send('Book not found');
        });
    });

    return router;
};
