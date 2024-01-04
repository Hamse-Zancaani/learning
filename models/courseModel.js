const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
Name:{
    type:String,
    required:[true,'please enter your first name']
},

Description:{
    type:String,
    required:[true,'please enter your Description'],
    unique:true
},
InstructorID :{
    type:String,
    required:[true]
},
StartDate:{
    type:String,
    required:[true,'please enter Start Date']
},
EndDate:{
    type:String,
    required:[true,'please enter your End Date']
},

})

const courseModel=mongoose.model('Course',courseSchema)

module.exports=courseModel;