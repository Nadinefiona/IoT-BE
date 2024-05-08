// Models/student.js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    laptopType: {
        type: String,
        required: true
    },
    serialNumber: {
        type: String,
        required: true
    }
});

export default mongoose.model('Student', studentSchema);
