const express = require('express');
const comments = require('../controllers/comment.controller');
const router = express.Router();
const app = express();

router.post('/', comments.create);
router.put('/:id', comments.update);
router.delete('/:id', comments.delete);
router.get('/article/:id', comments.getCommentByArticle);
// router.get('/', comments.findAll);
const commentRoutes = app.use('/api/comments', router);

module.exports = commentRoutes;