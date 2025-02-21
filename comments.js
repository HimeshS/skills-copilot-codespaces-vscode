// Create web server with express
// Create a route to handle the POST request
// Create a route to handle the GET request
// Create a route to handle the DELETE request
// Create a route to handle the PUT request
// Create a route to handle the PATCH request

const express = require('express');

const app = express();

app.use(express.json());

let comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send(comment);
});

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.delete('/comments', (req, res) => {
  comments = [];
  res.status(204).send();
});

app.put('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = req.body;
  comments[id] = comment;
  res.send(comment);
});

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = req.body;
  comments[id] = { ...comments[id], ...comment };
  res.send(comments[id]);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;