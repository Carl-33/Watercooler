const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");

// middleware

// middleware that prints incoming requests to the sever console.
app.use((req, res, next ) => {
    console.log(`request_endpoint: ${req.method} ${req.url}`)
    next();
})

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// Serve static assets
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to MongoDB or Mongo Atlas
// uncommnet out when mongoDB is ready
// mongoose.connect(process.env.MONGODB_URE || "mongodb://localhost/ (mongoDB database name here) ")

app.listen(PORT, function() {
    console.log("Watercooler listening on http://localhost:" + PORT)
})




