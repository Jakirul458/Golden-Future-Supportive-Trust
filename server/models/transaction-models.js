/*const { Schema, model } = require("mongoose");

const transactionSchema = new Schema({
    type: { type: String, enum: ['deposit', 'withdraw'], required: true },
    date: { type: String, required: true },
    account_no: { type: String, required: true },
    transaction_no: { type: String, required: true },
    deposit_bal: { type: Number }, // Assuming this is only required for deposit transactions
    withdraw_bal: { type: Number }, // Assuming this is only required for withdrawal transactions
    total_bal: { type: Number }, // Depending on your use case, this might not be needed
    remarks: { type: String }, // Remarks might not always be required
});

const  TransactionMoney = model('TransactionMoney', transactionSchema);
module.exports =  TransactionMoney;
*/
const { Schema, model } = require("mongoose");

const AdminCreateAccountSchema = new Schema({
    type: { type: String, enum: ['deposit', 'withdraw']},
    date: { type: Date, default: Date.now, required: true },
    account_no: { type: String, required: true, unique: true },
    consumer_name: { type: String },
    address: { type: String },
    aadhar_no: { type: String },
    mobile_no: { type: String},
    mail_id: { type: String },
    opening_bal: { type: Number},
    transaction_no:{type: Number},
    deposit_bal: { type: Number }, // Assuming this is only required for deposit transactions
    withdraw_bal: { type: Number }, // Assuming this is only required for withdrawal transactions
    total_bal: { type: Number}, // Depending on your use case, this might not be needed
    remarks: { type: String }, // Remarks might not always be required
});

const AdminCreateAccountModel = model('AdminCreateAccount', AdminCreateAccountSchema);
module.exports = AdminCreateAccountModel;
