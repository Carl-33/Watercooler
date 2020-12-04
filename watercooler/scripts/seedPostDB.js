const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.mongodeploy || "mongodb://localhost/watercooler");

const postSeed = [
    {
        author: "Steve Jobs",
        title: "I love money",
        body: "I really love money"
    },
    {
        author: "Tim Apple",
        title: "I too love money",
        body: "hooray money"
    }
];

db.Post
.remove({})
.then(() => db.Post.collection.insertMany(postSeed))
.then(data => {
    console.log(data.result.n + " posts inserted to the db");
    process.exit(0);
})
.catch(err => {
    console.log(err);
    process.exit(1);
});
