const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Create a pool for the PostgreSQL connection
const pool = new Pool({
  connectionString: 'postgres://localhost:5432/calliope_db' 
});

// Path to the SQL schema file
const schemaPath = path.join(__dirname, 'db', 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf-8');

// Function to execute the schema
const setupDatabase = async () => {
  try {
    await pool.query(schema);
    console.log('Database setup complete!');
  } catch (err) {
    console.error('Error setting up database:', err);
  } finally {
    pool.end();
  }
};

// Execute the setup
setupDatabase();
