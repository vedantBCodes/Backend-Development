const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("You have requested to root path");
});

app.get('/user/:id', (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});
