const express=require('express');
const mongoose=require('mongoose');


const HamarSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },

  role:{
      type:String,
      required:true,
      enum:["admin","manager","user"],
  },

  username:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  }

})

const Kamwalamodel=mongoose.model('Day3Collection',HamarSchema);
module.exports=Kamwalamodel;


//now i am goin to making 
