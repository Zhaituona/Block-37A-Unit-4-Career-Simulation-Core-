const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Placeholder routes
app.use('/api/users', require('./routes/users'));
app.use('/api/items', require('./routes/items'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/comments', require('./routes/comments'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
