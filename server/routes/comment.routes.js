const CommentController = require('../controllers/comment.controller');

module.exports = app => {
    app.get('/api/comments/:id', CommentController.findCommentsForOneRecipe);
    app.post('/api/comments/:id', CommentController.create);
    app.post('/api/comments/push/:id', CommentController.update);
}