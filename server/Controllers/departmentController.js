const Department = require("../Models/Department");
const User = require('../Models/User');

const DepartmentController = {
    getallhods: async (req, res) => {
        try {
            const gethods = await User.find({ role: 'lecturer' })

            return res.json({ Result: gethods })
        }
        catch (err) {
            console.log(err)
        }
    },

    createDepartment: async (req, res) => {
        try {
            const {
                name,
                code,
                description,
                headOfDepartment
            } = req.body


            const checkDept = await Department.findOne({
                $or: [
                    { name: name },
                    { code: code }
                ]
            })

            if (checkDept) {
                return res.json({ Error: "The Department Already Exists...!" })
            }

            const newDept = new Department({
                name: name,
                code: code,
                description: description,
                headOfDepartment: headOfDepartment
            })

            const resultDept = await newDept.save()

            if (resultDept) {
                const updatelec = await User.findOneAndUpdate(
                    { _id: headOfDepartment },
                    { $set: { role: 'hod' } },
                    { new: true }
                );

                if(updatelec){
                    return res.json({ Status: "Success", Message: "Department Created Success" })
                }
                else{
                    return res.json({ Error: "Error While Creating Department"})
                }
                
            }
            else {
                return res.json({ Error: "Internal Server Error while Creating Department" })
            }
        }
        catch (err) {
            console.log(err)
        }
    },

    getalldepts: async (req, res) => {
        try {
            const alldepts = await Department.find().populate('headOfDepartment');

            return res.json({ Result: alldepts })
        }
        catch (err) {
            console.log(err)
        }
    },

    getonedept: async (req, res) => {
        try {
            const id = req.params.id

            const deptgetid = await Department.findOne({ code: id })

            if (!deptgetid) {
                return res.json({ Error: "The Department is not Exists" })
            }

            return res.json({ Result: deptgetid })
        }
        catch (err) {
            console.log(err)
        }
    }
};

module.exports = DepartmentController;