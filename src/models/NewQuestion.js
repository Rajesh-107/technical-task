const mongoose = require("mongoose");

const NewquestionSchema = new mongoose.Schema({
  newquestion: String,
  answers: [
    {
      text:{
        type: String,
        required: true,
      },
      isTrue:{
        type: Boolean,
        required: true,
        default: false,
      }
    }
  ],
});
module.exports = mongoose.model("newQuestion", NewquestionSchema);


