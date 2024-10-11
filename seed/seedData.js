const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgres://localhost:5432/calliope_db' 
});

const seedData = async () => {
  try {
    await pool.query(`
      INSERT INTO users (username, email, password) 
      VALUES 
        ('user1', 'user1@example.com', 'password1'),
        ('user2', 'user2@example.com', 'password2');

      INSERT INTO items (name, description) 
      VALUES 
        ('Item 1', 'This is the first item.'),
        ('Item 2', 'This is the second item.');

      INSERT INTO reviews (user_id, item_id, rating, review_text) 
      VALUES 
        (1, 1, 5, 'Amazing item!'),
        (2, 2, 3, 'It\'s okay.');
    `);
    console.log("Database seeded!");
  } catch (error) {
    console.error('Error seeding database', error);
  } finally {
    pool.end();
  }
};

seedData();
