const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    rid: Number,
    comment: [{
        name: String,
        content: String,
        time: {type: Date, default: Date.now}
    }]
});

module.exports.Comment = mongoose.model('comment', CommentSchema);