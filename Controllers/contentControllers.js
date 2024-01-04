const Content = require('../models/contentModel');

// get all employees
exports.Contents= async(req,res)=>{

    try{
       await Content.find({})
        res.status(200).json('all Content')
    } catch(error){
        console.log("error in getting all Content")
    }
}

exports.Content=async(req,res)=>{
    try{

        
         await Content.findById(req.params.id)
        res.status(200).json("single Content")
    }catch(error){
        console.log("error in getting single Content")
    }
}

// create employee

exports.createContent=async(req,res)=>{
    try{
    await Content.create(req.body)
        res.status(200).json("new Course Content")
    }catch(error){
        console.log("error in creating new Content")
    } 
}


// update employee
exports.editContent=async(req,res)=>{
    try{
        

     await Content.findByIdAndUpdate(req.params.id,req.body)
     res.status(200).json("Content updated")


    
    }catch(error){
        res.status(500).json("internal server error")
    }
}


// delete employee

exports.deleteContent=async(req,res)=>{
    try{
        await Content.findByIdAndDelete(req.params.id)
    } catch(error){
        res.status(500).json("internal server error")
    }}