// Schema Validations

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Class')
.then(()=>{
    console.log("Connected to mongoDB");
})
.catch(()=>{
    console.log("Failed to connect"); 
});

const EmployeeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3,
        maxlenght : 15
    },
    age : {
        type : Number,
        min : [18, "age must be grater than 18"],
        max : [30, "age must be less than 30"]
    },
    email: {
        type: String,
        required: true,
        unique: true,             // no duplicate emails allowed
  },
    createdAt: {
        type: Date,
        default: Date.now         // default value if not given
  }
});

const Employee = mongoose.model("Employee" , EmployeeSchema);

Employee.insertOne({
    name : "Vinod",
    age : 25,
    email : "vinod@gmail.com",
})
.then((res)=>{
    console.log("Data inserted successfully");
})
.catch((err)=>{
    console.log("Error while inserting",err);
});

Employee.find()
.then((res)=>{
    console.log("Inserted Data : ",res);
})
.catch(()=>{
    console.log("Error while showing");
});