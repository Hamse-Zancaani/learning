const mongoose= require("mongoose")

const enrollmentSchema= new mongoose.Schema({
    UserID :{
        type:String,
        required:true
    },
    CourseID :{
        type:String,
        required:true
    },
    EnrollmentDate:{
        type:String,
        required:true
    },
  

})

const enrollmentModel= mongoose.model('enrollment',enrollmentSchema)
module.exports=enrollmentModel;