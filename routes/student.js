import express from 'express'
import { body, validationResult } from "express-validator";

import {studentController} from '../controllers/index.js'

const studentRouter = express.Router()


// Activities -> User object
studentRouter.get('/',
    studentController.getAllStudents
  )

studentRouter.get('/:studentId', 
   
    studentController.getStudentById
)

studentRouter.post('/create', 
[  body('name').isString().notEmpty(),
  body('email').isEmail(),
  body('language').isArray(),
  body('gender').isIn(['Male', 'Female']),
  body('phoneNumber').isString().isLength({ min: 5, max: 50 }),
  body('address').optional().isString(),
],
studentController.createStudent)

studentRouter.delete('/delete/:id', studentController.deleteStudent);

export default studentRouter