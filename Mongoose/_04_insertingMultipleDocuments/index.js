// Inserting multiple documents

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Class')
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch(()=>{
    console.log("Error while connecting");
})

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String
});

const Student = mongoose.model("Student", studentSchema );

Student.insertMany([{
    name : "vinod",
    age : 27,
    gender : "male",
},
{
    name : "prithvi",
    age : 21,
    gender : "male"
},
{
    name : "Rutuja",
    age : 30,
    gender : "female"
}])
.then(() => console.log('Multiple users added'))
.catch(err => console.log('Error:', err));