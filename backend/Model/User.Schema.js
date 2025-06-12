import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    fullname:{
          type:String,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true})

const User=mongoose.model("User",UserSchema)

export default User