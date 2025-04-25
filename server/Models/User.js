const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    staffNo: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ['user', 'staff', 'lecturer', 'hod', 'examadmin', 'superadmin'] },
    isActive: { type: Boolean, default: false }
}, {timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;