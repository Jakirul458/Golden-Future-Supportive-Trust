const { Schema, model } = require("mongoose");

const Deposit  = new Schema({
    date: { type: String, required: true },
    account_no: { type: String, required: true },
    transaction_no: { type: String, required: true },
    deposit_bal: { type: String, required: true },
    withdraw_bal: { type: String, required: true },
    total_bal: { type: String, required: true },
    remarks: { type: String, required: true },
    
    
});

const moneydeposit  = model('deposit ',Deposit);
module.exports = moneydeposit;
