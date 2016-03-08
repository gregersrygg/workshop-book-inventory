'use strict';
var bookRepo = require('./book-repo.js');
var app = require('./app.js')(bookRepo);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
