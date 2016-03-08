var books = {};

module.exports = {
    listBooks () {
        return Promise.resolve(books);
    },
    updateBook (isbn, count) {
        var item = books[isbn];
        if (item) {
            item.count = count;
        } else {
            books[isbn] = {isbn: isbn, count: count};
        }
        return Promise.resolve();
    },
    getCount (isbn) {
        var item = books[isbn];
        if (item) {
            return Promise.resolve(item.count);
        } else {
            return Promise.resolve(null);
        }
    }
};
