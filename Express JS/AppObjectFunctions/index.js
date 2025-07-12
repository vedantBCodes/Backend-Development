const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log('App is listening on port 3000');
});

// app.use() ---> it receives all types of requests

app.use((req,res)=>{
    console.log("request received");
    res.send("<h1>About Us</h1><p>Welcome to our website!</p>");
    
});