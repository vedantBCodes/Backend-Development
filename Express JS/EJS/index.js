const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/rollDice",(req,res)=>{
    res.render("rollDice");
});

app.get("/ig/:username",(req,res)=> {
    let {username} = req.params;
    res.render("instagram", {username} );
});

app.listen(3000,()=>{
    console.log("App is listening on port number 3000");
});