import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './Routes/students.js'; 
import searchRoutes from './Routes/search.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URL)
    .then(() => console.log('Database Connected...'))
    .catch(err => console.error('Database Connection Error:', err));

const PORT = process.env.PORT || 5000;

app.use('/api/students', studentRoutes); 
app.use('/api/search', searchRoutes); 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
