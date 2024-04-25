const depo= require("../models/deposit-models");

const Deposit= async (req,res)=>{
    try {
        
        const response = req.body;
        await depo.create(response);
        res.status(200).json({ msg: "Deposit  Successfully" });

    } catch (error) {
        res.status(500).json({ msg: "Deposit not Successfully" });
    }
}


module.exports=Deposit;