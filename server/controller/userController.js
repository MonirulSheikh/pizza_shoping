const UserModel=require("../models/userModel")

const RegisterController=async(req,res)=>{
    
const {fname,cpass,password, email}=req.body
console.log(fname)
if(!fname || !email || !password || !cpass){
    // console.log("All Field Are Required")
    return res.status(428).json({message:"All Field Are Required"})
}
const exiting=await UserModel.findOne({email})
console.log(exiting)

if(exiting){
    return res.status(428).json({message:"Email Alredy Exits"})
}
else{

    if(password===cpass){

        const data=new UserModel({name:fname,email,password})
        const response=await data.save()
        console.log(response)
        return res.status(200).json({message:"sucessful ",user:response})
    }else{
        return res.status(428).json({message:"Password Are not matched"})
    }
    
}


// const data=await UserModel.create({email,password,name})



}

const LoginController=async(req,res)=>{
const {email,password}=req.body
if(!email || !password){
    return  res.status(401).json({message:"Please fill all Field"})
}
const user=await UserModel.findOne({email})
// res.send(user)
// console.log(user)
if(user){
if(user.password==password){



    return  res.status(200).json(user)
}
else{
    return  res.status(401).json({message:"password not match"})
}

}else{
    return  res.status(401).json({message:"No user Found"})
}
}
module.exports={RegisterController,LoginController}
