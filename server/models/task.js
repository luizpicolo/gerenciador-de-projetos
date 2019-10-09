var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/taskdb');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  description: String,
  status: Boolean
});

var Task = mongoose.model("Tasks", TaskSchema);
module.exports = Task;