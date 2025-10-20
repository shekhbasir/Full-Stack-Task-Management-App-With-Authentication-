const express=require('express');
const RoutesForTask=express.Router();
const AllttaskBa=require('../models/AllTask');
const TokenVarify=require('../middleware/Tokenvarify');
const { default: mongoose, mongo } = require('mongoose');


RoutesForTask.post('/Adding',TokenVarify,async(req,res)=>{

  try{
    const {Task,TimeCom}=req.body;

    const newTask=new AllttaskBa({
      Task:Task,
      
     user: new mongoose.Types.ObjectId(req.user.id)
    })
    await newTask.save();

    return res.status(201).json({message:"Task Saved In Database ",newTask:{Task,TimeCom:newTask.TimeCom,user:req.user.id}});



  }catch(error){
    return res.status(500).json({message:"error from the code ",error:error.message});

  }
})

//now i am going to make the find routes

RoutesForTask.get('/fetching',TokenVarify,async(req,res)=>{
  try{
    const hamasabtask=await AllttaskBa.find({user:req.user.  id});
    if(!hamasabtask.length===0){
      return res.status(400).json({message:"Your Task Bar Is Empty "});
    }

    return res.status(201).json({message:"See Your Task ",hamasabtask});


  }catch(error){
    return res.status(500).json({message:"This is The Error from fetching ..."});
    
  }
})

RoutesForTask.put('/update/:id', TokenVarify, async (req,res)=>{
  try{
    const taskId = req.params.id;
    const { Task, TaskCom } = req.body;

  
    const updatedTask = await AllttaskBa.findOneAndUpdate(
      { _id: taskId, user: req.user.id },
      { Task, TaskCom },
      { new: true } 
    );

    if(!updatedTask){
      return res.status(404).json({message: "Task not found or not yours"});
    }

    return res.status(200).json({
      message: "Task updated successfully",
      updatedTask
    });

  } catch(error){
    return res.status(500).json({message:"Error from Updation", error: error.message});
  }
});


RoutesForTask.delete('/delete/:id',async(req,res)=>{
  try{
    const taskid=req.params.id;
    const deletingval=await AllttaskBa.findByIdAndDelete({_id:taskid});

    if(!deletingval){
      return res.status(400).json({message:"Not Found the Datain Database"});
    };

    return res.status(201).json({message:"Data deleted from the database"});
    
  }catch(error){
    return res.status(500).json({message:"Error from the Deleting Routes ",error:error.message});

  }
})

module.exports=RoutesForTask;