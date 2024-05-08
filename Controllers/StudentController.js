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
export const SearchBySerialNumber = async (req, res) => {
    try {
        const { serialNumber } = req.params; 
        console.log('Serial Number:', serialNumber); 
        const student = await Student.findOne({ serialNumber: serialNumber });

        if (!student) {
            console.log('No student found with serial number:', serialNumber); 
            return res.status(404).json({ message: "No student found with the provided serial number." });
        }

        console.log('Found student:', student); 
        res.json(student);
    } catch (err) {
        console.error('Error searching by serial number:', err); 
        res.status(500).json({ message: err.message });
    }
};


