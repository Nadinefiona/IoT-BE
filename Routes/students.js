// Routes/students.js
import express from 'express';
import { getAllStudents, createStudent } from '../Controllers/StudentController.js';

const router = express.Router();

router.get('/', getAllStudents);
router.post('/', createStudent);

export default router;
