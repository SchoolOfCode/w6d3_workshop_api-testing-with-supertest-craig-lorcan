import request from "supertest";

import app from "../app.js";

// Write your tests for task 2 in this file. Plan out what you need to import/require.
describe("GET requests to /users", () => {
    test("GET /users successfully returns an object of defined shape", async () => {
       await request(app)
          .get("/users")
          .expect(200)
          .expect(function (res) {
             let actual = res.body;
             let expected = { success: true, payload: expect.any(Array) };
             let expectedPayload = {
                id: expect.any(Number),
                username: expect.any(String),
             };
    
             expect(actual).toStrictEqual(expected);
    
             actual.payload.forEach((user) => {
                expect(user).toStrictEqual(expectedPayload);
             });
          });
    });
});

describe("GET requests to /users/:id", () => {
    test("GET /users/4 successfully returns an object of defined shape", async () => {
       await request(app)
          .get("/users/4")
          .expect(200)
          .expect(function (res) {
             let actual = res.body;
             let expected = { success: true, payload: { id: 4, username: expect.any(String) } };
             expect(actual).toStrictEqual(expected);
          });
    });

    test("GET /users/99 unsuccessfully returns an object of defined shape", async () => {
        await request(app)
           .get("/users/99")
           .expect(404)
           .expect(function (res) {
              let actual = res.body;
              let expected = { success: false, reason: "No user with ID 99 was found." };
              expect(actual).toStrictEqual(expected);
           });
     });
});












// EXAMPLE:
// request(app)
// .get('/user')
// .expect('Content-Type', /json/)
// .expect('Content-Length', '15')
// .expect(200)
// .end(function(err, res) {
//     if (err) throw err;
// });
