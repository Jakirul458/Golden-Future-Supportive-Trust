const user1 = require("../models/user-models");
const   allConsumers = require("../models/admin-create-accouint-models");



//import { useParams } from "react-router-dom";

//*------------------------------------*
//  admin using get all user logic   //
//*-----------------------------------*

const getAllUsers =async(req,res,next)=>{

     try {
        
        const users= await user1.find({},{password:0});

          if(!users || users.length === 0){
            res.status(404),json({message:"no users found"})
          }
          res.status(200).json(users);

     } catch (error) {

        /// using this logic error  forward backend to frontend
      next(error);
     }
}



//*------------------------------*
// updateUserData  fetch logic   //
//*------------------------------*
 
const updateUserData =async(req,res,next)=>{

try {
  const id = req.params.id;
  const updateUser=req.body;
  const updateUsers= await user1.updateOne({_id:id},{$set:updateUser});


  return res.status(200).json(updateUsers);
    


} catch (error) {
  next(error);
}
}



//*----------------------------*
// single data fetch logic   //
//*---------------------------*

const singleDataById= async(req, res,next) => {
   try {
         const id = req.params.id;

         const data = await user1.findOne({_id: id},{password:0});
         return res.status(200).json(data) ;

    
   } catch (error) {
    next(error);
   }
}

//*----------------------------*
//     Delete user logic        //
//*---------------------------*
const deleteUserById = async(req,res,next)=>{


       try {
        const id =  req.params.id;
        await user1.deleteOne ({_id:id});
         return res.status(200).json({message:"user deleted successfully"});
        
       } catch (error) {
        next(error)

       }
}




//*------------------------------------------*
// Saving Account Data Fetch,Update,Delete //
//*------------------------------------------*
//Get all users data fetch
const getAllConsumers =async(req,res,next)=>{

  try {
     
     const users= await allConsumers.find({},{password:0});

       if(!users || users.length === 0){
         res.status(404),json({message:"no consumers found"})
       }
       res.status(200).json(users);

  } catch (error) {

     /// using this logic error  forward backend to frontend
   next(error);
  }
}

//single consumer data fetch

const singleConsumerData= async(req, res,next) => {
  try {
        const id = req.params.id;

        const data = await allConsumers.findOne({_id: id},{password:0});
        return res.status(200).json(data) ;

   
  } catch (error) {
   next(error);
  }
}

//update  consumer data fetch
const updateConsumerData =async(req,res,next)=>{

try {
  const id = req.params.id;
  const updateConsumer=req.body;
  const  updateConsumers= await allConsumers.updateOne({_id:id},{$set:updateConsumer});


  return res.status(200).json(updateConsumers);
    


} catch (error) {
  next(error);
}
}


//delete  consumer data 
const deleteConsumerData = async(req,res,next)=>{
  try {
   const id =  req.params.id;
   await allConsumers.deleteOne ({_id:id});
    return res.status(200).json({message:"consumer deleted successfully"});
   
  } catch (error) {
   next(error)

  }
}





module.exports = {
  getAllUsers,
  deleteUserById,
  singleDataById,
  updateUserData, 

  getAllConsumers,
  singleConsumerData,
  updateConsumerData,
  deleteConsumerData,
 
};