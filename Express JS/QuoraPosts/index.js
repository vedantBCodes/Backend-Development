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
        id:"1a",
        username : "Vedant",
        content : "I Love Coding"
    },
     {
        id:"2b",
        username : "Prithvi",
        content : "I hate Coding"
    },
    {
        id:"3c",
        username : "Suraj",
        content : "I just got my 1st internship"
    },
    {
        id:"4d",
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

app.get("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p)=> id == p.id);
    // console.log(post);
    res.render("showPost",{post});
    // res.send("request accepted");
});

app.listen(3000,()=>{
console.log("App is listening on port 3000");
});