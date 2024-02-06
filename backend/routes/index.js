const express = require('express')

const userRoute = require('./user')
const AccountRoute = require('./account')
const router = express.Router();


router.use("/user", userRoute);
router.use("/account", AccountRoute)

module.exports =router
