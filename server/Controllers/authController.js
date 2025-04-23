const nodemailer = require('nodemailer');
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const UserActivity = require('../Models/UserActivity');
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
                staffno,
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
                    { staffNo: staffno },
                    { username: username },
                    { email: email },
                ]
            })

            if(checkuser){
                return res.json({ Error: "User Already Exists"})
            }

            const hashpass = await bcrypt.hash(password, 10)

            const newuser = new User({ 
                staffNo: staffno,
                username: username,
                email: email,
                password: hashpass,
            })

            const resultnewuser = await newuser.save()

            if(resultnewuser){
                const newactivity = new UserActivity({
                    email: email,
                    activity: "User Registation"
                })

                const resultnewact = await newactivity.save()

                if(resultnewact){
                    return res.json({ Status: "Success", Message: "User Registation Success"})
                }                
            }
            else{
                return res.json({ Error: "Internal Server Error Whilte Creating New user"})
            }
        }
        catch(err){
            console.log(err)
        }
    },


    signin: async(req, res) => {
        try{
            const {
                email,
                password,
            } = req.body

            const checkuser = await User.findOne({ email: email })

            if(!checkuser){
                return res.json({ Error: "User Not Found by Given Email"})
            }

            const checkpass = await bcrypt.compare(password, checkuser.password)

            if(!checkpass){
                return res.json({ Error: "Password Not Match..."})
            }
            if(checkuser.isActive === false){
                return res.json({ Error: "This Account is not Active Contact admin"})
            }

            const newAct = new UserActivity({
                email: email,
                activity: "User Login"
            })

            const resultact = await newAct.save()

            if(resultact){
                const token = jwt.sign({ id: checkuser._id, role: checkuser.role, user: checkuser }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.json({ Status: "Success", Message: "Login Success", Result: checkuser, Token: token })
            }
            else{
                return res.json({ Error: "Internal Server Error white Login to System"})
            }

        }   
        catch(err){
            console.log(err)
        }
    }

};

module.exports = authControoler;