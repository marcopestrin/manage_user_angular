var express = require('express');
//var db = require('./db/db');

var db = [
  {
    id: 1,
    title: "lunch",
    description: "Go for lunc by 2pm"
  }, 
  {
    id: 2,
    title: "dimnner",
    description: "come on!"
  }
]

// Set up the express app
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
  next();
});

// get all todos
app.get('/api/v1/todos', (req, res) => {  
  res.status(200).send({
    success: true,
    message: 'todos retrieved successfullyyyy',
    todos: db    
  })
  
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});