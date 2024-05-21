const user1 = require("../models/user-models");
//const allConsumers = require("../models/admin-create-accouint-models");

const allConsumers= require("../models/transaction-models");

//import { useParams } from "react-router-dom";

//*------------------------------------*
//  admin using get all user logic   //
//*-----------------------------------*

const getAllUsers = async (req, res, next) => {

  try {

    const users = await user1.find({}, { password: 0 });

    if (!users || users.length === 0) {
      res.status(404), json({ message: "no users found" })
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

const updateUserData = async (req, res, next) => {

  try {
    const id = req.params.id;
    const updateUser = req.body;
    const updateUsers = await user1.updateOne({ _id: id }, { $set: updateUser });


    return res.status(200).json(updateUsers);



  } catch (error) {
    next(error);
  }
}



//*----------------------------*
// single data fetch logic   //
//*---------------------------*

const singleDataById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await user1.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);


  } catch (error) {
    next(error);
  }
}

//*----------------------------*
//     Delete user logic        //
//*---------------------------*
const deleteUserById = async (req, res, next) => {


  try {
    const id = req.params.id;
    await user1.deleteOne({ _id: id });
    return res.status(200).json({ message: "user deleted successfully" });

  } catch (error) {
    next(error)

  }
}




//*------------------------------------------*
// Saving Account Data Fetch,Update,Delete //
//*------------------------------------------*
//Get all users data fetch
const getAllConsumers = async (req, res, next) => {

  try {

    const users = await allConsumers.find({}, { password: 0 });

    if (!users || users.length === 0) {
      res.status(404), json({ message: "no consumers found" })
    }
    res.status(200).json(users);

  } catch (error) {

    /// using this logic error  forward backend to frontend
    next(error);
  }
}

//single consumer data fetch

const singleConsumerData = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await allConsumers.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);


  } catch (error) {
    next(error);
  }
}

//update  consumer data fetch
const updateConsumerData = async (req, res, next) => {

  try {
    const id = req.params.id;
    const updateConsumer = req.body;
    const updateConsumers = await allConsumers.updateOne({ _id: id }, { $set: updateConsumer });


    return res.status(200).json(updateConsumers);



  } catch (error) {
    next(error);
  }
}


//delete  consumer data 
const deleteConsumerData = async (req, res, next) => {
  try {
    const id = req.params.id;
    await allConsumers.deleteOne({ _id: id });
    return res.status(200).json({ message: "consumer deleted successfully" });

  } catch (error) {
    next(error)

  }
}

//deposii money update 
/*const Deposit = async (req, res) => {
  try {
      const { account_no, deposit_bal } = req.body;

      // Find the account
      const account = await allConsumers.findOne({ account_no });

      if (!account) {
          return res.status(404).json({ message: 'Account not foundd' });
      }

      // Update the deposit balance
      account.total_bal += deposit_bal;

      // Find and update the opening balance
      const adminAccount = await allConsumers.findOneAndUpdate(
          { account_no },
          { opening_bal: deposit_bal },
          { new: true }
      );

      if (!adminAccount) {
          return res.status(404).json({ message: 'Admin account not found' });
      }

      // Save the updated models
      await account.save();
      await adminAccount.save();

      res.json({ message: 'Deposit successful', total_bal: account.total_bal });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
}*/

const Deposit = async (req, res) => {
  try {
    const { account_no, deposit_bal } = req.body;

    // Find the account
    let account = await allConsumers.findOne({ account_no })

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
if (account.total_bal == null || account.total_bal == undefined) {
  account.total_bal = parseFloat(account.opening_bal) + parseFloat(deposit_bal);
} else {
  // Update the total balance by adding the deposit amount
  //account.total_bal += deposit_bal;
  account.total_bal = parseFloat(account.total_bal) + parseFloat(deposit_bal);
}
    // Save the updated account
    account = await account.save();

    res.json({ message: 'Deposit successful', total_bal: account.total_bal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const Withdraw = async (req, res) => {
  try {
    const { account_no, withdraw_bal } = req.body;

    // Find the account
    let account = await allConsumers.findOne({ account_no })

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
   if (account.total_bal == null || account.total_bal == undefined) {
  account.total_bal = parseFloat(account.opening_bal) - parseFloat(withdraw_bal);
   }else{
  // Update the total balance by adding the withdraw amount
  account.total_bal = parseFloat(account.total_bal) - parseFloat(withdraw_bal);
}
    // Save the updated account
    account = await account.save();

    res.json({ message: 'Deposit successful', total_bal: account.total_bal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


//find account methods 

const FindAccount= async (req, res, next) => {
  try {
  // Extract the date parameter from the request
  const { account_no} = req.query;
  // Check if the date parameter is provided
  if (!account_no) {
  return res.status(400).json({ message: "Date parameter is required" });
  }
  // Use the date parameter to filter the meal requests
  const VMR = await allConsumers.find({ account_no });
  if (!VMR || VMR.length === 0) {
  return res.status(404).json({ message: "No Meal Request Found for the given date" });
  }
  res.status(200).json(VMR);
  } catch (error) {
  // Forward the error from backend to frontend
  next(error);
  }
  };
  



module.exports = {
  getAllUsers,
  deleteUserById,
  singleDataById,
  updateUserData,

  getAllConsumers,
  singleConsumerData,
  updateConsumerData,
  deleteConsumerData,
  Deposit,
  Withdraw,
  FindAccount,
};