const nodemailer = require('nodemailer');
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const UserActivity = require('../models/UserActivity');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const authControoler = {    
    signup: async (req, res) => {
        try{
            const {
                username,
                email,
                password,
            } = req.body

            if (!validator.isEmail(email)) {
                return res.json({ error: "Invalid email format" });
            }

            if (password.length < 6) {
                return res.json({ Error: "Password must be at least 6 characters" });
            }

            const checkuser = await User.findOne({
                $or: [
                    { indexNo: indexNo },
                    { username: username },
                    { email: email },
                ]
            })
        }
        catch(err){
            console.log(err)
        }
    }

};

module.exports = authControoler;