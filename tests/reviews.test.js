const request = require('supertest');
const app = require('../index');

describe('Reviews API', () => {

    // Test for submitting a review
    it('should submit a review', async () => {
        const res = await request(app)
            .post('/api/reviews')
            .send({
                user_id: 1,
                item_id: 1,
                rating: 5,
                review_text: 'Amazing product!'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Review submitted');
    });

    // Test for editing a review
    it('should edit a review', async () => {
        const res = await request(app)
            .put('/api/reviews/1')
            .send({
                review_text: 'Updated review text',
                rating: 4
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Review 1 updated');
    });

    // Test for deleting a review
    it('should delete a review', async () => {
        const res = await request(app)
            .delete('/api/reviews/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Review 1 deleted');
    });

    // Test for getting all reviews for a specific user
    it('should get all reviews for a user', async () => {
        const res = await request(app)
            .get('/api/reviews/user/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'All reviews for user 1');
    });
});
