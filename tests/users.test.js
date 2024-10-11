const request = require('supertest');
const app = require('../index');

describe('User API', () => {
    it('should sign up a user', async () => {
        const res = await request(app)
            .post('/api/users/signup')
            .send({
                username: 'newuser',
                email: 'newuser@example.com',
                password: 'password123'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'User signed up');
    });
});
