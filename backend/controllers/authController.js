const User=require("../models/User");
const bcrypt=require("bcryptjs");

exports.register=async(req,res)=>{

try{

const {name,email,password}=req.body;

const userExists=await User.findOne({email});

if(userExists){

return res.status(400).json({message:"User already exists"});
}

const hashed=await bcrypt.hash(password,10);

const user=await User.create({

name,
email,
password:hashed

});

res.status(201).json({

message:"Registration Successful"

});

}catch(err){

res.status(500).json({message:err.message});

}

}

exports.login=async(req,res)=>{

try{

const {email,password}=req.body;

const user=await User.findOne({email});

if(!user){

return res.status(400).json({message:"Invalid Email"});
}

const match=await bcrypt.compare(password,user.password);

if(!match){

return res.status(400).json({message:"Invalid Password"});
}

res.json({

message:"Login Successful",
user

});

}catch(err){

res.status(500).json({message:err.message});

}

}