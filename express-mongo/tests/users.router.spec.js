var UsersRouter = require('../routes/users');
var request = require('supertest');
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/", UsersRouter);

const usersData = [
    { "name": "admin", "password": "admin", "role": "admin" },
    { "name": "user", "password": "user", "role": "user" }
]

let boundaryTestName = `UsersRoutes boundary test`
let functionalTestName = `UsersRoutes functional test`

describe("UsersRouter", () => {

    let users;

    beforeEach(() => {
        users = [...usersData];
    })
    afterEach(() => {
        users = [];
    })

    it(`${boundaryTestName} should get all users`, (done) => {
        request(app)
            .get("/")
            .expect("Content-Type", /application\/json/)
            .expect({ success: true, data: users })
            .expect(200, done);
    });
    it(`${boundaryTestName} should create user`, (done) => {
        let data = { "name": "demo", "password": "demo", "role": "user" };

        request(app)
            .post("/")
            .send(data)
            .expect("Content-Type", /application\/json/)
            .expect({ success: true })
            .expect(200, done);
    });

    it(`${functionalTestName} should not create same user again`, (done) => {
        request(app)
            .post("/")
            .send({ "name": "demo", "password": "demo", "role": "user" })
            .expect("Content-Type", /application\/json/)
            .then(() => {
                request(app)
                    .post("/")
                    .send({ "name": "demo", "password": "demo", "role": "user" })
                    .expect({ success: false, message: `username is already used` })
                    .expect(200, done);
            });

    });

})