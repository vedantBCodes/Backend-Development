const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home");
});
app.listen(3000,()=>{
    console.log("App is listening on port 3000"); 
});