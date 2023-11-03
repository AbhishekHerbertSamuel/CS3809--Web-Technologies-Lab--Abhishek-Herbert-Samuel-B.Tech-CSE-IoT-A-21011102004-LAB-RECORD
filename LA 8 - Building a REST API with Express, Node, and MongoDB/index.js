const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/tododb', { useNewUrlParser: true, useUnifiedTopology: true });

const todoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

app.use(express.json());

// Route to add a new task
app.post('/todos', async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all tasks
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update a task by ID
app.put('/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete a task by ID
app.delete('/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the ToDo App!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

