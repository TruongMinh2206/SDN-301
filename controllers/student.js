import { validationResult } from "express-validator";
import { studentRepository} from "../repositories/index.js"


const getStudentById = async (req, res) => {
    try {
        const studentId = req.params.studentId
        const student  = await studentRepository.getStudentById(studentId);
        res.status(200).json({
            message: 'Get student Successfully',
            data: student 
        })
    } catch (error) {
        res.status(500).json({message: error.toString()})

    }
}

const getAllStudents = async (req, res) => {
    try {
        const allStudent = await studentRepository.getAllStudents()
        res.status(200).json({
            message: 'Get student Successfully',
            data: allStudent 
        })
    } catch (error) {
        res.status(500).json({message: error.toString()})

    }
}

const createStudent = async (req, res) => {
    try {
      const { name, email, language, gender, phoneNumber, address } = req.body;
      const existingStudent = await studentRepository.getStudentByEmail(email);
      if (existingStudent) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      const newStudent = await studentRepository.createStudent({
        name,
        email,
        language,
        gender,
        phoneNumber,
        address,
      });
      return res.status(201).json({ message: 'Student created', data: newStudent });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const deleteStudent = async (req, res) => {
    try {
      const studentId = req.params.id;
      const deletedStudent = await studentRepository.deleteStudent(studentId);
  
      if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      return res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };


export default {
    getStudentById,
    getAllStudents,
    createStudent,
    deleteStudent
}