const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.mongodeploy || "mongodb://localhost/watercooler");

const userSeed =[
    {
        firstName: "Steve",
        lastName: "Jobs",
        company: "Apple",
        location: "Cupertino",
        email: "Steve@Apple.com",
        password: "Lisa1"
    },
    {
        firstName: "Tim",
        lastName: "Apple",
        location: "Cupertino",
        email: "Apple@Apple.com",
        password: "Apple1"
    }
];

db.User 
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " users inserted to the db");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
    