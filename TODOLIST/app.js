const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public')); // To serve CSS files

let tasks = [];

app.get('/todo', (req, res) => {
  res.render('todo', { tasks });
});

app.post('/addTask', (req, res) => {
  const task = req.body.task;
  if (task) tasks.push(task);
  res.redirect('/todo');
});

app.post('/deleteTask', (req, res) => {
  const index = req.body.index;
  tasks.splice(index, 1);
  res.redirect('/todo');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/todo`);
});
