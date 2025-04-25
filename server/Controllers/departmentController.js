const Department = require("../Models/Department");

const DepartmentController = {
    createDepartment: async(req, res) => {
        try{
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

            if(checkDept){
                return res.json({ Error: "The Department Already Exists...!"})
            }

            const newDept = new Department({
                name: name,
                code: code,
                description: description,
                headOfDepartment: headOfDepartment
            })

            const resultDept = await newDept.save()

            if(resultDept){
                return res.json({ Status: "Success", Message: "Department Created Success"})
            }
            else{
                return res.json({ Error : "Internal Server Error while Creating Department"})
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = DepartmentController;