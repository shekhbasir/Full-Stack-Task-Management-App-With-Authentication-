// const express=require('express');


// const CheckRoles=(...allowedUser)=>{
//   return (req,res,next)=>{
//     const userrole=req.user.role;
//     if(!allowedUser.includes(userrole)){
//       return res.status(401).json({message:"You are not allowed for this "})
//     }

//     next();
//   }


// }
// module.exports=CheckRoles;
// //now i am able to used this for the diffret routes and i am check who is allowed for which role or not 


//lets make the role base middleware 

const CheckRole=(...allowedUser)=>{

  return(req,res,next)=>{
    const UserRole=req.user.role;

    if(!allowedUser.includes(UserRole)){
      return res.status(401).json({message:"You Are Not Autherize for this "});
    }
    next();

  }

}
module.exports=CheckRole;