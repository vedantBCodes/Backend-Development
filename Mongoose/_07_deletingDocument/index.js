// Deleting Document

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Class')
.then(()=>{
    console.log("Connected to mongodb");
})
.catch(()=>{
    console.log("Error connecting mongodb");
});

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String
});

const Student = mongoose.model("Student",studentSchema);

// Deleting Data

Student.deleteOne({name : "prithvi"})
.then(()=>{
    console.log("Deleted data successfully");
})
.catch((err)=>{
    console.log("Error while deleting data",err);
});

// Showing Data after deletion

Student.find()
.then((res)=>{
    console.log("data after deletion", res);
})
.catch((err)=>{
    console.log("Error while showing data", err);
});