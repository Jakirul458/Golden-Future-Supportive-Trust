
const wi= require("../models/transaction-models");

const Withdraw= async (req,res)=>{
    try {
        
        const response = req.body;
        await wi.create(response);
        res.status(200).json({ msg: "Withdraw  Successfully" });

    } catch (error) {
        res.status(500).json({ msg: "Withdraw  not Successfully" });
    }
}


module.exports=Withdraw;

