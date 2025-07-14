const express = require("express");

const app = express();
const {v4 : uuidv4} = require('uuid');
const methodOverride = require("method-override");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.get("/",(req,res)=>{
    res.send("This is root path");
});
let posts = [
    {
        id: uuidv4() ,
        username : "Vedant",
        content : "I Love Coding"
    },
     {
        id:uuidv4(),
        username : "Prithvi",
        content : "I hate Coding"
    },
    {
        id:uuidv4(),
        username : "Suraj",
        content : "I just got my 1st internship"
    },
    {
        id:uuidv4(),
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
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p)=> id == p.id);
    // console.log(post);
    res.render("showPost",{post});
    // res.send("request accepted");
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id == p.id );
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id == p.id);
    res.render("edit.ejs",{post});
});

app.listen(3000,()=>{
console.log("App is listening on port 3000");
});