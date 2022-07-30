const express = require("express");
const cors = require("cors")
const bodyParser =  require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;
const db = require('./models/');
const articleRoutes = require('./routes/article.routes');
const commentRoutes = require('./routes/comment.routes');

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log('Database Connected');
    }).catch((err) => {
        console.log('Cannot Connect to Database! ', err);
        process.exit();
    });

    

app.use(cors({credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/api/test", (req, res) => {
    res.json({
        message: "Welcome to API Testing"
    });
});
app.use(articleRoutes);
app.use(commentRoutes);

app.listen(PORT, () => console.log('Server is running at port '+PORT));