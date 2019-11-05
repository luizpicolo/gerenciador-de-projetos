var express = require('express');
var router = express.Router();

const Task = require('../models/task');

/* GET home page. */
router.get('/tasks', async (req, res, next) => {
  // await Task.create({title: 'Nome da Tarefa', description: 'Descrição da Tarefa', status: true})
  var tasks = await Task.find().sort({ _id: -1});
  res.send(JSON.stringify(tasks));
});

// finished
// unfinished
router.get('/tasks/countertask', async (req, res, next) => {
  var tasks = await Task.find({status: req.query.type})
  res.send(JSON.stringify(tasks.length));
})

router.post('/tasks', (req, res, next) => {
  let task = new Task(req.body.task);
  task.save((error) => {
    error ? res.send(task) : res.send(error)
  })
})

router.delete('/tasks', (req, res, next) => {
  Task.deleteOne({ _id: req.query.id }, (err) => {
    if (!err) {
      res.send(req.body)
    } else {
      res.send(err)
    }
  });
})

module.exports = router;
