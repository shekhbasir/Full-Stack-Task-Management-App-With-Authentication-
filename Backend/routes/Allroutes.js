const express=require('express');
const Allroutes=express.Router();
const {Hamalogin}=require('../controllers/Allcontroller');
const {Hamarsignup}=require('../controllers/Allcontroller');
const TokenVarify=require('../middleware/Tokenvarify');


//now i am going to making the signup routes 
Allroutes.post('/signup',Hamarsignup);
Allroutes.post('/login',Hamalogin);

module.exports=Allroutes;