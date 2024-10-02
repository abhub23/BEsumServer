const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());

const todos = [{
  id: 1,
  title: "Study JavaScript",
  description: "Learn from Harkirat",
  completed: false,
}, {
  id: 2,
  title: "Learn FullStack",
  description: "Do a Cohort 2.0 Course",
  completed: false,
}, {
  id: 3,
  title: "Go to Gym",
  description: "Go to gym from 7-9",
  completed: false,

}, {
  id: 4,
  title: "Learn React.js",
  description: "This Chapter is in Week 6",
  completed: false,
}, {

  id: 5,
  title: "Go to the beach",
  description: "Go to beach tomorrow Evening",
  completed: false,
}]

app.get("/todo", (req, res) => {
  const todo = todos.find(t => t.id == req.query.id);
  res.json({
    todo
  })
})

app.get("/todos", (req, res) => {
  const randomTodos = [];
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }
  res.json({
    todos: randomTodos,
  })
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send({
    total: total,
    interest: interest,
  })

});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10)
  })

})

app.listen(PORT, function(){
    console.log(`Ther server is running on ${PORT}` )
})