const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.mongodeploy || "mongodb://localhost/watercooler");

const workplaceSeed =[
{
    company: "Apple",
    location: "Cupertino"
},
{
    company: "Amazon",
    location: "Seattle"
}
];

db.Workplace 
    .remove({})
    .then(() => db.Workplace.collection.insertMany(workplaceSeed))
    .then(data => {
        console.log(data.result.n + " workplaces inserted to the db");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
    