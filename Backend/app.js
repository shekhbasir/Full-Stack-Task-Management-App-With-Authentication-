const express=require('express');
require('dotenv').config();
const app=express();
const Allroutes=require('./routes/Allroutes');
require('./config/DbConnection');
const cors=require('cors');
const RoutesForTask=require('./routes/RoutesForTask');
app.use(cors());
app.use(express.json());


app.use(Allroutes);
app.use(RoutesForTask);

const PORT=process.env.PORT||7002;
app.listen(PORT,()=>{
  console.log(`this is the link http://localhost:${PORT}`);
})