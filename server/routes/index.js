var express = require('express');
var router = express.Router();

const Task = require('../models/task');

/* GET home page. */
router.get('/tasks', async (req, res, next) => {
  // await Task.create({title: 'Nome da Tarefa', description: 'Descrição da Tarefa', status: true})
  var tasks = await Task.find();
  res.send(JSON.stringify(tasks));
});

router.delete('/tasks', (req, res, next) => {
  Task.remove({ _id: req.body.id }, (err) => {
    if (!err) {
      res.send(req.body)
    } else {
      res.send(err)
    }
  });
})

module.exports = router;
