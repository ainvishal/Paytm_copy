const express = require('express');
const {Accounts} = require('../db');
const auths = require('../middleware')
const mongoose = require('mongoose');


const accountrouter = express.Router();

accountrouter.get('/balence', async(req, res) => {
    const userid = req.body.userId;
    const useraccount = await Accounts.findOne({
        userId: userid
    })

    res.status(200).json({
        balence : useraccount.balence
    })
})

accountrouter.post('/transfer', async(req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const account = await Accounts.findOne({
        userId: req.body.userId
    }).session(session)
    if(!account || account.balence < req.body.balence) {
        session.abortTransaction();
        res.status(400).json({
            msg: 'insufficient balence or invalid account'
        })
    }

    const toaccount = await Accounts.findOne({
        userId: req.body.to
    }).session(session)
    if(!toaccount) {
        session.abortTransaction()
        res.status(400).json({
            msg:'invalid account'
        })
    }
    const amount = req.body.amount;
    await Accounts.updateOne({ userId:account._id}, { $inc : {balence: -amount}}).session(session)
    await Accounts.updateOne({ userId:toaccount._id }, { $inc : {balence: amount}}).session(session)

    await session.commitTransaction();
    res.status(200).json({
        msg: 'Transfer succesfull'
    })

})

module.exports = accountrouter