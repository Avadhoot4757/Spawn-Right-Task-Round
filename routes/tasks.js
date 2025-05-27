const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { tasks } = require('../models/tasks');

const router = express.Router();

const validStatuses = ['pending', 'in-progress', 'completed'];

const findTask = (id) => tasks.find(task => task.id === id);

router.post('/', (req, res) => {
    const { title, description = '', status = 'pending' } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'Task title is required and must be a non-empty string.' });
    }

    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ error: `Invalid status. Allowed values: ${validStatuses.join(', ')}` });
    }

    const task = {
        id: uuidv4(),
        title,
        description,
        status,
        created_at: new Date(),
        updated_at: new Date()
    };

    tasks.push(task);
    res.status(201).json(task);
});

router.get('/', (req, res) => {
    res.json(tasks);
});

router.get('/:id', (req, res) => {
    const task = findTask(req.params.id);

    if (!task) {
        return res.status(404).json({ error: 'Task not found with given ID.' });
    }

    res.json(task);
});

router.put('/:id', (req, res) => {
    const task = findTask(req.params.id);

    if (!task) {
        return res.status(404).json({ error: 'Task not found with given ID.' });
    }

    const { title, description, status } = req.body;

    if (title !== undefined) {
        if (typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({ error: 'Title must be a non-empty string.' });
        }
        task.title = title;
    }

    if (description !== undefined) {
        if (typeof description !== 'string') {
            return res.status(400).json({ error: 'Description must be a string.' });
        }
        task.description = description;
    }

    if (status !== undefined) {
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: `Invalid status. Allowed values: ${validStatuses.join(', ')}` });
        }
        task.status = status;
    }

    task.updated_at = new Date();
    res.json(task);
});

router.delete('/:id', (req, res) => {
    const index = tasks.findIndex(task => task.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: 'Task not found with given ID.' });
    }

    tasks.splice(index, 1);
    res.json({ message: 'Task deleted successfully.' });
});

module.exports = router;
