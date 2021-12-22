import request from "supertest";

import app from "../app.js";

// Write your tests for task 2 in this file. Plan out what you need to import/require.


request(app)
    .get("/")
    .something
    .something










    // EXAMPLE:
// request(app)
// .get('/user')
// .expect('Content-Type', /json/)
// .expect('Content-Length', '15')
// .expect(200)
// .end(function(err, res) {
//     if (err) throw err;
// });