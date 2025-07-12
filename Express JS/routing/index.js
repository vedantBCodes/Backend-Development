const express = require('express');
const app = express();

app.listen(8080,()=>{
    console.log('App is listening on port 8080');
});

// Roting in Express

app.get("/",(req,res)=>{
    res.send("You send get request to Root Path");
});

app.get("/about",(req,res)=>{
    res.send("You contacted About Path");
});

app.get("/search",(req,res)=>{
    res.send("You contacted search Path");
});

app.post("/",(req,res)=>{
    res.send("You send post request to Root Path");
});

// Catch-all route for undefined paths

app.use((req, res) => {
  res.send('This path does not exist');
});