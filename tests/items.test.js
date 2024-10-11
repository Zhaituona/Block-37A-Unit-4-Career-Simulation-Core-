const request = require('supertest');
const app = require('../index');

describe('Items API', () => {

    // Test for getting all items
    it('should retrieve all items', async () => {
        const res = await request(app)
            .get('/api/items');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'All items retrieved');
    });

    // Test for getting a single item by ID
    it('should retrieve item details by ID', async () => {
        const res = await request(app)
            .get('/api/items/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Item details for item 1');
    });
});
