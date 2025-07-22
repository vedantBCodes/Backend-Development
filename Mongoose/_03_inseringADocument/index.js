// Creating a  document

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Class')
.then(()=>
{
    console.log("Connected to MongoDB");   
})
.catch(()=>
{
    console.log("Error while connecting");
});

const divSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String
});

const Student = mongoose.model('Student', divSchema);

// Create and save a student 

const student1 = new Student({
    name : 'Vedant' ,
    age : 24 ,
    gender : 'male'
});

student1.save()
.then(()=>{
    console.log("saved student successfully");
})
.catch((err)=>{
    console.log("Error while saving ", err);
})