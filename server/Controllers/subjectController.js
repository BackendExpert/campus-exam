const { default: Subject } = require("../Models/Subjects");

const subjectController = {
    createSubject: async(req, res) => {
        try{
            const {
                name,
                code,
                description
            } = req.body

            const checksubject = await Subject.findOne({
                $or: [
                    { name: name },
                    { code: code }
                ]
            })

            if(checksubject){
                return res.json({ Error: "The Subject Already Exists..."})
            }

            const addsubject = new Subject({
                name: name,
                code: code,
                description: description
            })

            const resultSubject = await addsubject.save()

            if(resultSubject){
                return res.json({ Status: "Success", Message: "Subject Created Success"})
            }
            else{
                return res.json({ Error: "Internal Server Error while Creating Subject"})
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = subjectController;