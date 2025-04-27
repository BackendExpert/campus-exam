import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
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
        type: String,
        default: '',
        trim: true
    },
}, {timestamps: true });

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;
