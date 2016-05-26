var mongoose = require('mongoose');

var simpleSchema = new mongoose.Schema(
    {name: String,
      highscore: Number,
      comment: String
    }
  );

mongoose.model('Person', simpleSchema, 'people');

