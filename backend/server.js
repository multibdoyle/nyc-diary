const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const commentRoutes = express.Router();
const PORT = 4000;

let Comment = require('./comment.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/comments', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

commentRoutes.route('/').get(function(req, res) {
    Comment.find(function(err, comments) {
        if (err) {
            console.log(err);
        } else {
            res.json(comments);
        }
    });
});

commentRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Comment.findById(id, function(err, comment) {
        res.json(comment);
    });
});

commentRoutes.route('/add').post(function(req, res) {
    let comment = new Comment(req.body);
    comment.save()
        .then(comment => {
            res.status(200).json({'comment': 'comment added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new comment failed');
        });
});

commentRoutes.route('/update/:id').post(function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        if (!comment)
            res.status(404).send('data is not found');
        else
           
            comment.comment_name = req.body.comment_name;
            comment.comment_text = req.body.comment_text;

            comment.save().then(comment => {
                res.json('Comment updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/comments', commentRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


