var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/taskdb');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: { 
    type: String,
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  description: String,
  status: { 
    type: Boolean,
    default: true
  }
});

var Task = mongoose.model("Tasks", TaskSchema);
module.exports = Task;