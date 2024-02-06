const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://vishalaindala49:vishal%404321@cluster0.e3i4lzw.mongodb.net/PaytmUser');

}

const User_schema = new mongoose.Schema({
    email: String,
    firstName: { type:String, required:true},
    lastName: { type:String, required: true},
    password: { type:String, required: true}
})

const Account_schema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User"},
  balence: {type: Number, required:true}
})

const User = mongoose.model( 'User', User_schema)
const Accounts = mongoose.model('Account', Account_schema)

module.exports = {
    User,
    Accounts
};