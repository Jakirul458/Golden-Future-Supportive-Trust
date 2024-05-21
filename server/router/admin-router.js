const express= require("express");
const router= express.Router();

//*----------------------------------*
// Require controller and Middleware//
//*----------------------------------*
// Admin controller all logic here
const adminController= require("../controllers/admin-controller");
//check the toke is verified or not
const userMiddleware =require("../middlewares/user-auth-middleware");
// admin are not verified that logic
const adminMiddleware =require("../middlewares/auth-admin-middleware");
// admin Add Products logic
const AdminAddAllProducts= require("../controllers/Admin-Add-Products-controller");
// admin Add meal logic
const adminAddCategory= require("../controllers/Admin-Add-Category-controller");




//*------------------------*
// saving Account Admin  Logic //
//*-----------------------*
const AdminCreateAccount= require("../controllers/Admin-CreateAccount-controller");
//const Deposit= require("../controllers/deposit");
//const Withdraw= require("../controllers/withdraw");




//*-----------------------------------*
// Create Account  maintain by Admin //
//*-----------------------------------*
//Customer Information Form
router.route("/admincreateaccount").post(userMiddleware,adminMiddleware,AdminCreateAccount);
//Customer Money Deposit Logic 
router.route("/deposit").patch(userMiddleware,adminMiddleware,adminController.Deposit);
//Customer Money Deposit Logic 
router.route("/withdraw").patch(userMiddleware,adminMiddleware,adminController.Withdraw);
//Customer Money Deposit Logic 
router.route("/findAccount").get(userMiddleware,adminMiddleware,adminController.FindAccount);



//*------------------------------------------*
// Saving Account Data Fetch,Update,Delete //
//*------------------------------------------*
//Get all users data fetch
router.route("/allConsumers").get(userMiddleware,adminMiddleware,adminController.getAllConsumers);
//single data fetch for Consumer logic
router.route("/allConsumers/:id").get(userMiddleware,adminMiddleware,adminController.singleConsumerData);
//update Consumer data
router.route("/allConsumers/update/:id").patch(userMiddleware,adminMiddleware,adminController.updateConsumerData);
// delete consumer data
router.route("/allConsumers/delete/:id").delete(userMiddleware,adminMiddleware,adminController.deleteConsumerData);





//*--------------------------------------------------------*
// Data Retrieve Logic For Users Data Fetch,Update,Delete //
//*-------------------------------------------------------*
//Get all users data fetch
router.route("/users").get(userMiddleware,adminMiddleware,adminController.getAllUsers);
//single data fetch
router.route("/users/:id").get(userMiddleware,adminMiddleware,adminController.singleConsumerData);
//update user data
router.route("/users/update/:id").patch(userMiddleware,adminMiddleware,adminController.updateUserData);
// delete routes create
router.route("/users/delete/:id").delete(userMiddleware,adminMiddleware,adminController.deleteUserById);

//*-----------------------------------*
// E-commerce site maintain by Admin //
//*-----------------------------------*
//Admin Add Products
router.route("/adminAddProducts").post(userMiddleware,adminMiddleware,AdminAddAllProducts);
//Admin Add category Pr
router.route("/adminAddCategory").post(userMiddleware,adminMiddleware,adminAddCategory);





module.exports = router;

