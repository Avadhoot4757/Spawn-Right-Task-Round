const express = require('express');
const taskRoutes = require('./routes/tasks');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
