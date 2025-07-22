// Creating schema and model

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Class')
.then(()=>
{
    console.log("Connected to mongoDB");
    
})
.catch(()=>
{
    console.log(("Error while connecting"));
    
});

// Creating a schema

const divSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String
});

// Creating a model

const Student = mongoose.model('Student', divSchema);

