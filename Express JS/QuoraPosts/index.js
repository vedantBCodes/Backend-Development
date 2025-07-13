const express = require("express");

const app = express();

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("This is root path");
});
let posts = [
    {
        username : "Vedant",
        content : "I Love Coding"
    },
     {
        username : "Prithvi",
        content : "I hate Coding"
    },
    {
        username : "Suraj",
        content : "I just got my 1st internship"
    },
    {
        username : "Amruta",
        content : "I don't like to study"
    },
]
app.get("/posts",(req,res)=>{
    res.render("index",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("new");    
});

app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    console.log(req.body); // ✅ Now it will show the form data
    posts.push({ username, content });
    res.redirect("/posts");
});


app.listen(3000,()=>{
console.log("App is listening on port 3000");
});