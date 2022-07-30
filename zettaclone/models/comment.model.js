module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            comment: {
                type: String,
                required: true
            },
            article_id: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
        }, {timestamps: true}
    )

    schema.method("toJSON", function() {
        const {__v,_id, ...object} = this.toObject();
        object.id = _id;
        return object;
    })

    const Comments = mongoose.model("comments", schema);
    return Comments;
}