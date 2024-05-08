import express from 'express';
import {  SearchBySerialNumber} from '../Controllers/StudentController.js';

const router = express.Router();

router.get('/:serialNumber', SearchBySerialNumber);

export default router;
