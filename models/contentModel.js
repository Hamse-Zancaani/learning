const mongoose= require("mongoose")

const contentSchema= new mongoose.Schema({
    content_title :{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    content_type:{
        type:String,
        required:true
    },
    file_path :{
        type:String,
        required:true
    },
    course_id :{
        type:String,
        required:true
    },
  
  

})

const contentModel= mongoose.model('Content',contentSchema)
module.exports=contentModel;