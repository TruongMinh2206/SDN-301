import Student from "../models/Student.js";
import bcrypt from 'bcrypt'

const getAllStudents = async () => {
    try {
        const getAll = await Student.find({});
   
          return getAll
        

    } catch (error) {
        console.error(error);
    }
}

const getStudentById = async (studentId) => {
    try {
        const student = await Student.findById(studentId);
       
            return student
        
    } catch (e) {
        
        console.error(e);
        throw e;
    }
}

const getStudentByEmail = async (email) => {
    try {
      const existingStudent = await Student.findOne({ email });
      return existingStudent;
    } catch (error) {
      console.error(error);
      throw new Error("Get student by email failed");
    }
  };

const createStudent = async (studentData) => {
    try {
      const newStudent = new Student(studentData);
      await newStudent.save();
      return newStudent;
    } catch (error) {
      console.error(error);
      throw new Error("Create student failed");
    }
  };

  const deleteStudent = async (id) => {
    try {
      const deletedStudent = await Student.findOneAndDelete({ _id: id });
  
      if (!deletedStudent) {
        return null; 
      }
      return deletedStudent;
    } catch (error) {
      console.error(error);
      throw new Error("Delete student failed");
    }
  };


   


export default {
    getAllStudents,
    getStudentById,
    createStudent,
    getStudentByEmail,
    deleteStudent
    
}