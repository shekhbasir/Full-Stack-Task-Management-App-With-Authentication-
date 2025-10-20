const express=require('express');
const Kamwalamodel=require('../models/DbSchema');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const Hamarsignup=async(req,res)=>{
  try{
    const {name,role,username,password}=req.body;

    const Alreadytanaikhe=await Kamwalamodel.findOne({username:username});

    if(Alreadytanaikhe){
      return res.status(400).json({message:"USername Already Exist .."});
    }

    const Hashedpass=await bcrypt.hash(password,10);

    const newData=new Kamwalamodel({
      name:name,
      role:role,
      username:username,
      password:Hashedpass
    })

    await newData.save();
    return res.status(201).json({message:"Data saved Succesfully ..."});

  }catch(error){
    // return res.status(500).json({message:"Error from the Signup controllers ",error});
    console.log(error);

  }

}

const Hamalogin=async(req,res)=>{

  try{
    const {username,password}=req.body;

    const usernambaa=await Kamwalamodel.findOne({username:username});
    if(!usernambaa){
      return res.status(400).json({message:"Username Is Not Exist ..."});
    }

    const comparepass=await bcrypt.compare(password,usernambaa.password);

    if(!comparepass){
      return res.status(400).json({message:"password is not match ..."});
    }
    const token=await jwt.sign({id:usernambaa._id,role:usernambaa.role,name:usernambaa.name,username:usernambaa.username},process.env.SECERET_KEY,{expiresIn:"1d"});
    
    return res.status(200).json({message:"Succesfull login ...",token ,   user:{name:usernambaa.name,
    username:usernambaa.username,
    role:usernambaa.role}});



  }catch(error){
    return res.status(500).json({message:"Error  from the Login controllers ..",error});

  }
}

module.exports={Hamarsignup,Hamalogin}

//now  i am going to set the login page simply and then i am going to work there in simple form 