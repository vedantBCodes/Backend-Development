// Reading a Document

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Class')
.then(()=>{
    console.log('connected to MongoDB');
})
.catch(()=>{
    console.log("Error while connecting");
});

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String
});

const Student = mongoose.model("Student",studentSchema);

Student.find().then((data)=>{
    console.log("All Data : ",data);
})
.catch(()=>{
    console.log("Error while reading data");
});

Student.find({name : "Vedant"}).then((data)=>{
    console.log("Vedant's Data : ",data);
})
.catch(()=>{
    console.log("Error while reading data");
});

Student.find({age : {$gt : 25}}).then((data)=>{
    console.log("Data of students with age > 25: ",data);
})
.catch(()=>{
    console.log("Error while reading data");
});

Student.find({age : {$gt : 25}}).then((students)=>{
    console.log("Names of students with age > 25 : ");
    for(let student of students)
    {
        console.log(student.name);
    }
})
.catch(()=>{
    console.log("Error while reading data");
});