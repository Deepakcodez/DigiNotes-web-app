import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : [true, "Please provide Email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Please provide password"]
    },
    isAdmin:{
        type : Boolean,
        default : false
    },
    isVerified:{
        type : Boolean,
        default : false
    },
    forgetPasswordToken : String,
    forgetPasswordTokenExpiry : Date,
    verifyToken : String,
    verifyTokenExpiry : Date,

},{timestamps : true});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;