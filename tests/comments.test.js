const request = require('supertest');
const app = require('../index');

describe('Comments API', () => {

    // Test for submitting a comment
    it('should submit a comment', async () => {
        const res = await request(app)
            .post('/api/comments')
            .send({
                review_id: 1,
                user_id: 1,
                comment_text: 'This is a great review!'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Comment submitted');
    });

    // Test for editing a comment
    it('should edit a comment', async () => {
        const res = await request(app)
            .put('/api/comments/1')
            .send({
                comment_text: 'Updated comment text'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Comment 1 updated');
    });

    // Test for deleting a comment
    it('should delete a comment', async () => {
        const res = await request(app)
            .delete('/api/comments/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Comment 1 deleted');
    });

    // Test for getting all comments for a specific user
    it('should get all comments for a user', async () => {
        const res = await request(app)
            .get('/api/comments/user/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'All comments for user 1');
    });
});
