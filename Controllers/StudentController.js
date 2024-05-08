// Controllers/StudentController.js
import Student from '../Models/student.js';

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createStudent = async (req, res) => {
    try {
        const { name, registrationNumber, email, laptopType, serialNumber } = req.body;
        const newStudent = new Student({ name, registrationNumber, email, laptopType, serialNumber });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
