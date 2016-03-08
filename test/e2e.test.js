'use strict';
var request = require('supertest');
var assert = require('assert');
var mockRepo = require('./inmemoryrepo.js');
var app = require('../app.js')(mockRepo);
var describe = require('mocha').describe;
var it = require('mocha').it;

const TEST_OBJ = {"isbn": "1617291781", "count": 10};

describe('POST /stock', () => {
    it('respond with json', (done) => {
        request(app)
            .post('/stock')
            .send(TEST_OBJ)
            .expect('Content-type', /application\/json/)
            .expect(200)
            .end((err, res) => {
                if (err) { return done(err); }
                const responseObj = res.body;
                console.log(responseObj);
                assert.equal(responseObj.isbn, TEST_OBJ.isbn);
                assert.equal(responseObj.count, TEST_OBJ.count);
                done();
            });
    });
});

describe('GET /stock', () => {
    it('responds with json', (done) => {
        request(app)
            .get('/stock')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200, done);
    });
});
