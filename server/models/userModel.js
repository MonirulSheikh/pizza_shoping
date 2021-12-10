const mongoose = require("mongoose")


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    isadmin:{
        type:Boolean,
        default:false
    }
}, { timestamps: true })

const User=mongoose.model("UserDetail",userSchema)
module.exports=User