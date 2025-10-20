const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();



  const kabhail=mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database Is Connected Succesfully ...");
  
  }).catch(error=>{
    console.log("Error from Data abse connection ",error);
  })

 

  
module.exports=mongoose;