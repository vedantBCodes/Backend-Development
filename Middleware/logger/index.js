// Logger middleware
/*
It’s a custom middleware function that logs details about each incoming HTTP request to the server.
It logs:
The current date & time
The HTTP method (GET, POST, etc.)
The URL path requested
*/

const express = require('express');
const logger = require("./logger")
const app = express();

// app.use(logger , (req,res,next)=>{
//   console.log("inside index.js");
//   next();
// });

app.get("/",logger, (req,res)=>{
    res.send("This is root path");
});

app.get("/about",logger, (req,res)=>{
    res.send("This is about path");
});

app.listen(3000,()=>{
    console.log("App is listening on port 3000"); 
});