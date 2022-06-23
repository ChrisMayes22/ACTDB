import request from 'supertest';
import app from '../app.js';

describe("GET /tests", () => {
    it("should recieve a response of type json", done => {
        request(app)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})