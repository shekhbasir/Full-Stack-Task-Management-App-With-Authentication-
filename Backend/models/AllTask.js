
const mongoose=require('mongoose');

const AllTask=new mongoose.Schema({
  Task:{
    type:String,
    required:true,
  },
  TaskCom:{
    type:Boolean,
    default:false,
    
  },
  user:{
    type:String,
    required:true
  }
})
const AllttaskBa=mongoose.model("SaraTask",AllTask);
module.exports=AllttaskBa;

