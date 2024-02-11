const express = require('express');
const {Accounts} = require('../db');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')


const accountrouter = express.Router();

accountrouter.get('/balence', async(req, res) => {
    const token = req.query.id;
    const verifiedtoken = jwt.verify(token, JWT_SECRET)
    const userid = verifiedtoken.userid
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
    const token = req.body.userid;
    const verifiedtoken = jwt.verify(token, JWT_SECRET)
    const userid = verifiedtoken.userid
    const account = await Accounts.findOne({
        userId: userid
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
    await Accounts.updateOne({ _id:account._id}, { $inc : {balence: -amount}}).session(session)
    await Accounts.updateOne({ _id:toaccount._id }, { $inc : {balence: amount}}).session(session)

    await session.commitTransaction();
    res.status(200).json({
        msg: 'Transfer succesfull'
    })

})

module.exports = accountrouter