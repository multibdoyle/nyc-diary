const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({
   comment_name: {
        type: String
    },
    comment_text: {
        type: String
    }
});

module.exports = mongoose.model('Comment', Comment);