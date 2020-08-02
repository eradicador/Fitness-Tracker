//import npm modules:
//require the express module 
const express = require("express");
//require the morgan module 
const logger = require("morgan");
//require the mongoose module 
const mongoose = require("mongoose");
//assign PORT to a const statement and whatever is in the environment variable PORT, or 3000 if there's nothing there.
const PORT = process.env.PORT || 3000;
//the const db statement requires the models directory
const db = require("./models");
//create an express application
const app = express();
//call use() on the Express application to use morgan HTTP request logger middleware
app.use(logger("dev"));
//express Middleware:
//parses incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));
//parses incoming requests with JSON payloads
app.use(express.json());
//middleware to serve static files, including images, CSS and JavaScript from the directory public
app.use(express.static("public"));
//mongoose.connect() method to connect to MongoDB 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerdb", { useNewUrlParser: true });

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//express is listening for PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});