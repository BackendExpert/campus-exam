const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true 
    },
    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true, 
        trim: true
    },
    description: {
        type: String
    },
    headOfDepartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;