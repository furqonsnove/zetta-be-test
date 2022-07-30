const db = require('../models');
const Article = db.articles;
const Comment = db.comments;

exports.create = async(req,res) => {
    const {title, author, body, published } = req.body;
    const article = new Article({
        title: title,
        body: body,
        author: author,
        published: published ? published : false
    })
    try {
        const saveArticle = await article.save(article);
        if(saveArticle) res.status(201).json({message: "Data created!", saveArticle})
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.findAll = async(req,res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		let sort = req.query.sort || "asc";

		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

		const articles = await Article.find()
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		const total = await Article.countDocuments();

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			articles,
		};
		res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.findOne = async(req,res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.status(200).json({message: "OK", article});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

exports.update = async(req,res) => {
    const cekId = await Article.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data not found!"}); 
    try {
        const updatedArticles = await Article.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json({message: "OK", updatedArticles});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.delete = async(req,res) => {
    const cekId = await Article.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data not Found!"});
    try {
        await Comment.deleteMany({article_id: req.params.id});
        await Article.deleteOne({_id: req.params.id});
        res.status(200).json({message: "Article has been deleted"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}