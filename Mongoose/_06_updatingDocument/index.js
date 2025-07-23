// Updating document using update()

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Class')
.then(()=>{
    console.log("Connected to mongoDB");
})
.catch(()=>{
    console.log("Failed to connect");
});

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String
});

const Student = mongoose.model("Student",studentSchema);

// Updating Data 
Student.updateOne({name : "Vedant"},{$set : {age : 27}})
.then((res)=>{
    console.log("Data updated successfully " , res);
})
.catch(()=>{
    console.log("Error while updating data"); 
});

Student.updateMany(
  { age: { $lt: 28 } },
  { $set: { age: 18 } }
)
.then((res)=>{
    console.log("Data updated successfully " , res);
})
.catch(()=>{
    console.log("Error while updating data"); 
});

// Reading data
Student.find()
.then((res)=>{
    console.log("Updated Data : " , res);
})
.catch(()=>{
    console.log("Error while updating data"); 
});