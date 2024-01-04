const Course = require('../models/courseModel');

// get all employees
exports.Courses= async(req,res)=>{

    try{
       await Course.find({})
        res.status(200).json('all Courses')
    } catch(error){
        console.log("error in getting all Courses")
    }
}

exports.Course=async(req,res)=>{
    try{

        
         await Course.findById(req.params.id)
        res.status(200).json("single Course")
    }catch(error){
        console.log("error in getting single Course")
    }
}

// create employee

exports.createCourse=async(req,res)=>{
    try{
    await Course.create(req.body)
        res.status(200).json("new Course created")
    }catch(error){
        console.log("error in creating new Course")
    } 
}


// update employee
exports.editCourse=async(req,res)=>{
    try{
        

     await Course.findByIdAndUpdate(req.params.id,req.body)
     res.status(200).json("Course updated")


    
    }catch(error){
        res.status(500).json("internal server error")
    }
}


// delete employee

exports.deleteCourse=async(req,res)=>{
    try{
        await Course.findByIdAndDelete(req.params.id)
    } catch(error){
        res.status(500).json("internal server error")
    }}