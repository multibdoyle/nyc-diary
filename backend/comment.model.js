const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({
    comment_id: {
        type: Number
    },
   comment_name: {
        type: String
    },
    comment_text: {
        type: String
    },
    comment_date: {
        type: Date
    }
});

module.exports = mongoose.model('Todo', Todo);