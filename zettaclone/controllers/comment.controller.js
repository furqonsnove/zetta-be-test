const db = require('../models');
const Article = db.articles;
const Comment = db.comments;

exports.create = async (req, res) => {
    const { comment, article_id, author } = req.body;
    const article = await Article.findById(article_id);
    if(article < 1) return res.status(404).json({message: "Article not found!"});
    const commentData = new Comment({
        comment: comment,
        article_id: article_id,
        author: author
    })
    try {
        const saveComment = await commentData.save(commentData);
        if (saveComment) res.status(201).json({ message: "Data created!", data: saveComment })
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.getCommentByArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if(article < 1) return res.status(404).json({message: "Article not found!"});
        const query = { article_id: req.params.id };
        const getComment = await Comment.find(query);
        res.status(200).json({ message: "OK", data: getComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.update = async (req, res) => {
    const cekId = await Comment.findById(req.params.id);
    if (!cekId) return res.status(404).json({ message: "Data not found!" });
    try {
        const commentUpdate = await Comment.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json({ message: "OK", commentUpdate });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.delete = async (req, res) => {
    const cekId = await Comment.findById(req.params.id);
    if (!cekId) return res.status(404).json({ message: "Data not Found!" });
    try {
        await Comment.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Comment has been deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}