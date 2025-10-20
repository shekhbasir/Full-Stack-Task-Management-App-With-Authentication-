const express=require('express');
const jwt=require('jsonwebtoken');

const TokenVarify=async(req,res,next)=>{

  const authHeaders=req.headers.authorization;
  if(!authHeaders){
    return res.status(401).json({message:"NO token Found ..."});
  }
  try{
    const token=authHeaders.split(' ')[1];
  
    const decode=jwt.verify(token,process.env.SECERET_KEY);
    req.user=decode;
    next();
  }catch(error){

    return res.status(500).json({message:"Error From The token varification ",error})

  }

}

module.exports=TokenVarify;

// abb ma iss token ko use kar sakta huu apne kaam ke liye 