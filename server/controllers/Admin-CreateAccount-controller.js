/*const adminCreateAccount= require("../models/admin-create-accouint-models");

const AdminCreateAccount= async (req,res)=>{
    try {
        
        const response = req.body;
        await adminCreateAccount.create(response);
        res.status(200).json({ msg: "Admin Create Account  Successfully" });

    } catch (error) {
        res.status(500).json({ msg: "Admin  Account not Created" });
    }
}


module.exports=AdminCreateAccount;*/
const depo= require("../models/transaction-models");
const AdminCreateAccount= async (req,res)=>{
    try {
        
        const response = req.body;
        await  depo.create(response);
        res.status(200).json({ msg: "Admin Create Account  Successfully" });

    } catch (error) {
        res.status(500).json({ msg: "Admin  Account not Created" });
    }
}


module.exports=AdminCreateAccount;