const express = require("express");

const app = express();

const protectRoute = require(" ./protectRoute ");

app.get("/", (req , res) => {
    res.send("This is a root path");
});

app.get(" /dashboard ", protectRoute ,(req,res) => {
    res.send("This is a dashboard path");
});

app.use((req,res) => {
    res.send("This is wrong path");
})

app.listen(3000,() => {
    console.log("App is listening on port 3000");
});
