const express = require('express');
const app = express()
const jwt = require('jsonwebtoken')
const Zod = require('zod');
const {User} = require('../db');
const {Accounts} = require('../db')
const {JWT_SECRET} = require('../config');
const userRoute = express.Router();
// const authheader = require('../middleware')

// app.use(authheader)

const user_schema = Zod.object({
    email:Zod.string(),
    firstName:Zod.string(),
    lastName:Zod.string(),
    password:Zod.string()
})

userRoute.post('/signup', async(req, res) => {
    const { success } = user_schema.safeParse(req.body)
    if(!success) {
        res.status(411).json({
            msg : 'inputs incorrect'
        }   )
    }

    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    const userQueries = await User.findOne({email: email});
    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    if(!userQueries) {
        const newUser = await User.create({
            email : email,
            firstName : firstName,
            lastName : lastName,
            password : password,
        })
        const userid = newUser._id
        const token = jwt.sign({userid}, JWT_SECRET);

        await Accounts.create({
            userId: userid,
            balence: randomNumber
        })
        res.status(200).json({
            msg:'user is succesfully created',
            token: token,
            exits: false
        })
    }
    else {
        res.status(200).json({
            msg: 'email already exits',
            exits: true
        })
    }




})

const signinids = Zod.object({
    email: Zod.string(),
    password: Zod.string()
})

userRoute.post('/signin', async (req, res) => {
    const {success} = signinids.safeParse(req.body)
    if(!success) {
        res.status(401).json({
            msg : "inputs are not valid"
        })
    }
    const existingUser = await User.findOne({email:req.body.email, password:req.body.password});
    if(!existingUser) {
        res.status(200).json({
            msg : "error in login",
            exits : true
        })
    }
    
    try{
        const userid = existingUser._id
        const token = jwt.sign({userid}, JWT_SECRET);
        res.status(200).json({
            token : token,
            exits: false
        })
    }catch(err) {
        console.error('the error is '+err)
    }


})

const updatedbody = Zod.object({
    password: Zod.string(),
    firstName: Zod.string(),
    lastName: Zod.string()
})

userRoute.put('/', async (req, res) => {
    const { success } = updatedbody.safeParse(req.body)
    if(!success) {
        res.status(411).json({
            msg:'inputs are invalid'
        })
    }

    await User.updateOne(req.body, {
        _id : req.userid
    })

})

userRoute.get('/bulk', async(req, res) => {
    const filter = req.query.filter || '';

    const users = await User.find({
        $or : [
            {
                firstName: {"$regex": filter},

            }

        ]
    })

    res.status(200).json({
        user: users.map( user => ({
            username: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            _id : user._id
        }))
    })
})

module.exports = userRoute