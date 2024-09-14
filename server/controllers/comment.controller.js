const {Comment} = require('../models/comment.model');

module.exports.findCommentsForOneRecipe = (req, res) => {
    Comment.find({rid:req.params.id})
    .then(comments => res.json(comments))
    .catch(err => res.json(err));
}

// If the recipe is not in the db, create one
module.exports.create = (req, res) => {
    Comment.create(req.body)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json(err));
}

// If the recipe is already in the db, push into its comment field
module.exports.update = (req, res) => {
    Comment.findOneAndUpdate({rid: req.params.id}, {$push: {comment: req.body}}, {new:true})
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json(err));
}
