const express = require('express');
const articles = require('../controllers/article.controller');
const router = express.Router();
const app = express();

router.post('/', articles.create);
router.get('/', articles.findAll);
router.put('/:id', articles.update);
router.delete('/:id', articles.delete);
const articleRoutes = app.use('/api/article', router);

module.exports = articleRoutes;