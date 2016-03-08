'use strict';
var bookRepo = require('./book-repo.js');
var app = require('./app.js')(bookRepo);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
