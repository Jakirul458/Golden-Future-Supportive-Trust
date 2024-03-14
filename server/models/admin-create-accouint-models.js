const { Schema, model } = require("mongoose");

const AdminCreateAccount = new Schema({
    date: { type: String, required: true },
    serial_no: { type: String, required: true },
    account_no: { type: String, required: true },
    consumer_name: { type: String, required: true },
    address: { type: String, required: true },
    aadhar_no: { type: String, required: true },
    mobile_no: { type: String, required: true },
    mail_id: { type: String, required: true },
    opening_bal: { type: String, required: true },
    
    

});

const admincreateaccount  = model('admincreateaccount ',AdminCreateAccount);
module.exports = admincreateaccount ;
